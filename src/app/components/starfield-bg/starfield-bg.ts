import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

interface Star {
    x: number;
    y: number;
    z: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number;
    twinkleOffset: number;
    color: string;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
    life: number;
    maxLife: number;
}

@Component({
    selector: 'app-starfield-bg',
    standalone: true,
    template: `<canvas #starCanvas id="starfield-canvas"></canvas>`,
    styleUrl: './starfield-bg.css'
})
export class StarfieldBg implements AfterViewInit, OnDestroy {
    @ViewChild('starCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;
    private stars: Star[] = [];
    private shootingStars: ShootingStar[] = [];
    private animationId = 0;
    private time = 0;
    private mouseX = 0;
    private mouseY = 0;
    private targetMouseX = 0;
    private targetMouseY = 0;

    private readonly STAR_COUNT = 280;
    private readonly SHOOTING_STAR_INTERVAL = 4000;
    private lastShootingStarTime = 0;

    private readonly STAR_COLORS = [
        'rgba(255, 255, 255,',
        'rgba(200, 220, 255,',
        'rgba(255, 240, 220,',
        'rgba(180, 200, 255,',
        'rgba(255, 200, 180,',
        'rgba(220, 180, 255,',
    ];

    ngAfterViewInit(): void {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;
        this.resizeCanvas();
        this.initStars();
        this.animate(0);
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationId);
    }

    @HostListener('window:resize')
    onResize(): void {
        this.resizeCanvas();
        this.initStars();
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        this.targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        this.targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    }

    private resizeCanvas(): void {
        const canvas = this.canvasRef.nativeElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    private initStars(): void {
        this.stars = [];
        const { width, height } = this.canvasRef.nativeElement;

        for (let i = 0; i < this.STAR_COUNT; i++) {
            this.stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random(),
                radius: Math.random() * 1.8 + 0.3,
                opacity: Math.random() * 0.6 + 0.4,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleOffset: Math.random() * Math.PI * 2,
                color: this.STAR_COLORS[Math.floor(Math.random() * this.STAR_COLORS.length)]
            });
        }
    }

    private spawnShootingStar(): void {
        const canvas = this.canvasRef.nativeElement;
        const side = Math.random();
        let x: number, y: number, angle: number;

        if (side < 0.5) {

            x = Math.random() * canvas.width;
            y = -10;
            angle = Math.PI / 4 + Math.random() * (Math.PI / 6);
        } else {

            x = canvas.width + 10;
            y = Math.random() * canvas.height * 0.5;
            angle = Math.PI * 0.6 + Math.random() * (Math.PI / 6);
        }

        this.shootingStars.push({
            x, y, angle,
            length: 80 + Math.random() * 120,
            speed: 8 + Math.random() * 12,
            opacity: 1,
            life: 0,
            maxLife: 60 + Math.random() * 40
        });
    }

    private animate = (timestamp: number): void => {
        this.time += 0.016;
        const canvas = this.canvasRef.nativeElement;
        const ctx = this.ctx;

        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;


        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#020617');
        gradient.addColorStop(0.3, '#0a0e2a');
        gradient.addColorStop(0.6, '#0f172a');
        gradient.addColorStop(1, '#0c1222');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        this.drawNebula(ctx, canvas);

        for (const star of this.stars) {
            const parallaxX = this.mouseX * star.z * 15;
            const parallaxY = this.mouseY * star.z * 15;

            const twinkle = Math.sin(this.time * star.twinkleSpeed * 60 + star.twinkleOffset);
            const currentOpacity = star.opacity * (0.5 + 0.5 * twinkle);
            const currentRadius = star.radius * (0.85 + 0.15 * twinkle);

            const drawX = star.x + parallaxX;
            const drawY = star.y + parallaxY;


            if (star.radius > 1.0) {
                const glowGradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, currentRadius * 4);
                glowGradient.addColorStop(0, `${star.color} ${currentOpacity * 0.3})`);
                glowGradient.addColorStop(1, `${star.color} 0)`);
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(drawX, drawY, currentRadius * 4, 0, Math.PI * 2);
                ctx.fill();
            }


            ctx.fillStyle = `${star.color} ${currentOpacity})`;
            ctx.beginPath();
            ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
            ctx.fill();
        }


        if (timestamp - this.lastShootingStarTime > this.SHOOTING_STAR_INTERVAL) {
            this.spawnShootingStar();
            this.lastShootingStarTime = timestamp;
        }


        this.shootingStars = this.shootingStars.filter(ss => {
            ss.life++;
            ss.x += Math.cos(ss.angle) * ss.speed;
            ss.y += Math.sin(ss.angle) * ss.speed;


            if (ss.life > ss.maxLife * 0.6) {
                ss.opacity = Math.max(0, 1 - (ss.life - ss.maxLife * 0.6) / (ss.maxLife * 0.4));
            }


            const tailX = ss.x - Math.cos(ss.angle) * ss.length;
            const tailY = ss.y - Math.sin(ss.angle) * ss.length;

            const trailGradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
            trailGradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
            trailGradient.addColorStop(0.7, `rgba(200, 220, 255, ${ss.opacity * 0.4})`);
            trailGradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

            ctx.strokeStyle = trailGradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(ss.x, ss.y);
            ctx.stroke();


            const headGlow = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 4);
            headGlow.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
            headGlow.addColorStop(1, `rgba(200, 220, 255, 0)`);
            ctx.fillStyle = headGlow;
            ctx.beginPath();
            ctx.arc(ss.x, ss.y, 4, 0, Math.PI * 2);
            ctx.fill();

            return ss.life < ss.maxLife;
        });

        this.animationId = requestAnimationFrame(this.animate);
    }

    private drawNebula(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        const nebulaX = canvas.width * 0.7 + this.mouseX * 30;
        const nebulaY = canvas.height * 0.25 + this.mouseY * 20;
        const nebulaRadius = Math.min(canvas.width, canvas.height) * 0.4;

        const nebula1 = ctx.createRadialGradient(nebulaX, nebulaY, 0, nebulaX, nebulaY, nebulaRadius);
        nebula1.addColorStop(0, 'rgba(88, 28, 135, 0.06)');
        nebula1.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
        nebula1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebula1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const nebula2X = canvas.width * 0.2 + this.mouseX * 20;
        const nebula2Y = canvas.height * 0.6 + this.mouseY * 15;
        const nebula2 = ctx.createRadialGradient(nebula2X, nebula2Y, 0, nebula2X, nebula2Y, nebulaRadius * 0.6);
        nebula2.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
        nebula2.addColorStop(0.5, 'rgba(37, 99, 235, 0.02)');
        nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebula2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

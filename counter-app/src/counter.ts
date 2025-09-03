class DOMCache {
    private static cache = new Map<string, HTMLElement>();

    static getElement<T extends HTMLElement>(id: string): T | null {
        if (this.cache.has(id)) {
            return this.cache.get(id) as T;
        }
        const element = document.getElementById(id) as T | null;
        if (element) {
            this.cache.set(id, element);
        }
        return element;
    }

    static getElements<T extends HTMLElement>(ids: string[]): Map<string, T | null> {
        const elements = new Map<string, T | null>();
        ids.forEach(id => {
            elements.set(id, this.getElement<T>(id));
        })
        return elements;
    }

    static clearCache(): void {
        this.cache.clear();
    }
}

class CounterApp {
    private counter: HTMLDivElement;
    private incrementBtn: HTMLButtonElement;
    private decrementBtn: HTMLButtonElement;
    private resetBtn: HTMLButtonElement;
    private count = 0;

    constructor() {
        const elements = DOMCache.getElements<HTMLElement>([
            'counter',
            'increment',
            'decrement',
            'reset'
        ])
        this.counter = elements.get('counter') as HTMLDivElement;
        this.incrementBtn = elements.get('increment') as HTMLButtonElement;
        this.decrementBtn = elements.get('decrement') as HTMLButtonElement;
        this.resetBtn = elements.get('reset') as HTMLButtonElement;

        if (!this.validateElements()) {
            throw new Error('Required DOM elements not found')
        }

        this.initEventListeners();
        this.updateCounter();
    }

    private validateElements(): boolean {
        return !!(this.counter && this.incrementBtn && this.decrementBtn && this.resetBtn);
    }

    private updateCounter(): void {
        this.counter.textContent = this.count.toString();
    }

    private initEventListeners(): void {
        this.incrementBtn.addEventListener('click', () => {
            this.count++;
            this.updateCounter();
        });

        this.decrementBtn.addEventListener('click', () => {
            this.count--;
            this.updateCounter();
        });

        this.resetBtn.addEventListener('click', () => {
            this.count = 0;
            this.updateCounter();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new CounterApp();
    } catch (error) {
        console.error('Failed to initialize CounterApp:', error);
    }
})
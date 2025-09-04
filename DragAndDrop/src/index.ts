const list = document.querySelector(".list") as HTMLElement | null;
let dragging: HTMLElement | null = null;

if (list) {
    list.addEventListener('dragstart', (e: DragEvent) => {
        const target = e.target as HTMLElement;
        if (target && target.classList.contains('item')) {
            dragging = target;
            target.classList.add('dragging');
        }
    });

    list.addEventListener('dragend', () => {
        if (dragging) {
            dragging.classList.remove('dragging');
        }
        document.querySelectorAll('.item').forEach(item => item.classList.remove('over'));
        dragging = null;
    });

    list.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(list, e.clientY);
        document.querySelectorAll('.item').forEach(item => item.classList.remove('over'));
        if (afterElement && dragging) {
            afterElement.classList.add('over');
            list.insertBefore(dragging, afterElement);
        } else if (dragging) {
            list.appendChild(dragging);
        }
    });
}

function getDragAfterElement(container: HTMLElement, y: number): HTMLElement | null {
    const items = Array.from(container.querySelectorAll<HTMLElement>('.item:not(.dragging)'));
        
    return items.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        }
        return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

import { initClock } from './clock.js';
import { appendNumber, setOperation, calculate, clearDisplay } from './calculator.js';

// Ждем загрузки DOM перед инициализацией
document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем часы
    initClock();

    // Экспортируем функции калькулятора в глобальную область видимости
    window.appendNumber = appendNumber;
    window.setOperation = setOperation;
    window.calculate = calculate;
    window.clearDisplay = clearDisplay;
}); 
/**
 * @jest-environment jsdom
 */

import { jest } from '@jest/globals';
import { appendNumber, setOperation, calculate, clearDisplay, aaa } from './calculator.js';

// Создаем мок для display элемента
const mockDisplay = {
    value: ''
};

// Мокаем DOM элементы
global.document.getElementById = jest.fn(() => mockDisplay);

describe('Calculator Functions', () => {
    beforeEach(() => {
        // Очищаем состояние калькулятора и мока перед каждым тестом
        clearDisplay();
        mockDisplay.value = '';
        jest.clearAllMocks();
    });

    test('calculate should correctly add two numbers', () => {
        // Arrange
        appendNumber('5');
        setOperation('+');
        appendNumber('3');

        // Act
        calculate();

        // Assert
        expect(mockDisplay.value).toBe('8');
    });

    test('calculate should correctly subtract two numbers', () => {
        // Arrange
        appendNumber('10');
        setOperation('-');
        appendNumber('4');

        // Act
        calculate();

        // Assert
        expect(mockDisplay.value).toBe('6');
    });

    test('aaa function should return "aaa"', () => {
        // Act
        const result = aaa();

        // Assert
        expect(result).toBe('aa');
    });
}); 
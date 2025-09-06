import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Minus, Plus, RotateCcw, Keyboard } from 'lucide-react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [minValue, setMinValue] = useState(-100);
  const [maxValue, setMaxValue] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);
  const [history, setHistory] = useState<number[]>([0]);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const updateCount = useCallback((newValue: number) => {
    const clampedValue = Math.max(minValue, Math.min(maxValue, newValue));
    setCount(clampedValue);
    setHistory(prev => [...prev.slice(-9), clampedValue]);
    triggerAnimation();
  }, [minValue, maxValue]);

  const increment = () => updateCount(count + step);
  const decrement = () => updateCount(count - step);
  const reset = () => updateCount(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case '+':
          e.preventDefault();
          increment();
          break;
        case 'ArrowDown':
        case '-':
          e.preventDefault();
          decrement();
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          reset();
          break;
        case '1':
          setStep(1);
          break;
        case '5':
          setStep(5);
          break;
        case '0':
          setStep(10);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [count, step, increment, decrement, reset]);

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Main Counter Display */}
        <Card className={`relative overflow-hidden bg-gradient-primary shadow-counter ${
          isAnimating ? 'animate-counter-bounce' : ''
        }`}>
          <div className="p-8 text-center">
            <div className="text-6xl font-bold text-primary-foreground mb-2 font-mono">
              {count.toLocaleString()}
            </div>
            <div className="text-primary-foreground/70 text-sm">
              Step: {step} | Range: {minValue} to {maxValue}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </Card>

        {/* Control Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <Button
            variant="secondary"
            size="lg"
            onClick={decrement}
            className="h-16 text-xl shadow-button hover:shadow-counter transition-all duration-200"
            disabled={count <= minValue}
          >
            <Minus className="w-6 h-6" />
          </Button>
          
          <Button
            variant="destructive"
            size="lg"
            onClick={reset}
            className="h-16 shadow-button hover:shadow-counter transition-all duration-200"
          >
            <RotateCcw className="w-6 h-6" />
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={increment}
            className="h-16 text-xl shadow-button hover:shadow-counter transition-all duration-200"
            disabled={count >= maxValue}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>

        {/* Quick Step Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 5, 10].map((stepValue) => (
            <Button
              key={stepValue}
              variant={step === stepValue ? "default" : "outline"}
              onClick={() => setStep(stepValue)}
              className="transition-all duration-200"
            >
              ±{stepValue}
            </Button>
          ))}
        </div>

        {/* Custom Controls */}
        <Card className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Custom Step</label>
              <Input
                type="number"
                value={step}
                onChange={(e) => setStep(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-1"
                min="1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Min Value</label>
              <Input
                type="number"
                value={minValue}
                onChange={(e) => setMinValue(parseInt(e.target.value) || -100)}
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Max Value</label>
            <Input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(parseInt(e.target.value) || 100)}
              className="mt-1"
            />
          </div>
        </Card>

        {/* History */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-muted-foreground">Recent Values</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {history.slice(-8).map((value, index) => (
              <div
                key={index}
                className={`px-3 py-1 rounded-md text-sm font-mono ${
                  index === history.length - 1
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </Card>

        {/* Keyboard Shortcuts */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Keyboard className="w-4 h-4" />
            <span className="text-sm font-medium text-muted-foreground">Keyboard Shortcuts</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>↑ / + : Increment | ↓ / - : Decrement</div>
            <div>Enter / Space : Reset | 1/5/0 : Set step to 1/5/10</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Counter;
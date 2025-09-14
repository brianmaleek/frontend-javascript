// TypeScript file: main.ts
// MajorCredits interface with branding
export interface MajorCredits {
    credits: number;
    _brand: 'major';
}

// MinorCredits interface with branding
export interface MinorCredits {
    credits: number;
    _brand: 'minor';
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _brand: 'major' };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
}

// Usage Examples to test
console.log(sumMajorCredits({ credits: 13000, _brand: 'major' }, { credits: 400, _brand: 'major' })); // { credits: 7, _brand: 'major' }
console.log(sumMinorCredits({ credits: 2000, _brand: 'minor' }, { credits: 500, _brand: 'minor' })); // { credits: 7, _brand: 'minor' }


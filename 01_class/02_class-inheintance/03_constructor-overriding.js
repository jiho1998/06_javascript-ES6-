// 03_생성자 오버라이딩
// 클래스가 다른 클래스를 상속 받고 constractor가 없는 경우에는 비어있는 constructor가 만들어진다.
// 생성자는 기본적으로 부모 constructor를 호출한다.
// 이 때 부모 constructor에도 인수를 모두 전달하는데 클래스에 자체 생성자가 없는 경우에 이런 

class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은) 는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    move(loseWeight) {
        if(this.weight > loseWeight)
        this.weight -= loseWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${loseWeight}kg 감량되어 ${this.weight}kg 이 되었습니다`)
    }
}

class Deer extends Animal {

    constructor(name, weight, legLenght) {
        super(name, weight);
        this.legLenght = legLenght;
    }

    hide(place) {
        console.log(`${this.name}(은)는 ${place}에 숨습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 40, 1);
deer.hide('동굴 안');
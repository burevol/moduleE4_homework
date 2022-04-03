class ElectricDevice {
    constructor(power) {
        this.powerState = false
        this.powerConsumption = power
        this.name = 'Электроприбор'
    }

    getPowerConsumption() {
        let consumption = 0;
        if (this.powerState) {
            consumption = this.powerConsumption;
        } else {
            consumption = 0;
        }
        console.log(`${this.name} потребляет ${consumption} Вт`)
    }

    switchOn() {
        console.log(`Включаем ${this.name}`)
        this.powerState = true;
    }

    switchOff() {
        console.log(`Выключаем ${this.name}`)
        this.powerState = false;
    }

    turn() {
        console.log(`Переключаем ${this.name}`)
        this.powerState = !this.powerState;
    }
}

class Lamp extends ElectricDevice {
    constructor(power, room) {
        super(power);
        this.room = room
        this.name = 'Лампа'

    }

    getPlace() {
        console.log(`Лампа размещена в комнате: ${this.room}`)
    }
}

class TVSet extends ElectricDevice {
    constructor(work_power, sleep_power, room) {
        super(work_power);
        this.sleepPowerConsumption = sleep_power
        this.room = room
        this.name = 'Телевизор'
        this.sleepMode = false
    }

    getPlace() {
        console.log(`Телевизор размещена в комнате: ${this.room}`)
    }

    getPowerConsumption() {
        let consumption = 0;
        if (this.powerState) {
            if (this.sleepMode) {
                consumption = this.sleepPowerConsumption;
            } else {
                consumption = this.powerConsumption;
            }
        } else {
            consumption = 0;
        }
        console.log(`${this.name} потребляет ${consumption} Вт`);
    }

    setSleepMode(sleepMode) {
        this.sleepMode = sleepMode
        if (this.sleepMode) {
            console.log('Спящий режим включен');
        } else {
            console.log('Спящий режим выключен');
        }
    }

}

lamp_hall = new Lamp(100, 'Зал');
lamp_hall.getPlace();
lamp_hall.getPowerConsumption();
lamp_hall.switchOn();
lamp_hall.getPowerConsumption();

tv = new TVSet(50, 0.5, 'Кухня')
tv.getPlace();
tv.getPowerConsumption();
tv.turn();
tv.getPowerConsumption();
tv.setSleepMode(true);
tv.getPowerConsumption();
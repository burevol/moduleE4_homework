function ElectricDevice(power) {
    this.powerState = false
    this.powerConsumption = power
    this.name = 'Электроприбор'
}

ElectricDevice.prototype.getPowerConsumption = function () {
    let consumption = 0;
    if (this.powerState) {
        consumption = this.powerConsumption;
    } else {
        consumption = 0;
    }
    console.log(`${this.name} потребляет ${consumption} Вт`)
}

ElectricDevice.prototype.switchOn = function () {
    console.log(`Включаем ${this.name}`)
    this.powerState = true;
}

ElectricDevice.prototype.switchOff = function () {
    console.log(`Выключаем ${this.name}`)
    this.powerState = false;
}

ElectricDevice.prototype.turn = function () {
    console.log(`Переключаем ${this.name}`)
    this.powerState = !this.powerState;
}

function Lamp(power, room) {
    this.powerConsumption = power
    this.room = room
    this.name = 'Лампа'
}

Lamp.prototype = new ElectricDevice()

Lamp.prototype.getPlace = function () {
    console.log(`Лампа размещена в комнате: ${this.room}`)
}

function TVSet(work_power, sleep_power, room) {
    this.powerConsumption = work_power
    this.sleepPowerConsumption = sleep_power
    this.room = room
    this.name = 'Телевизор'
    this.sleepMode = false
}

TVSet.prototype = new ElectricDevice()

TVSet.prototype.getPlace = function () {
    console.log(`Телевизор размещена в комнате: ${this.room}`)
}

TVSet.prototype.getPowerConsumption = function () {
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

TVSet.prototype.setSleepMode = function (sleepMode) {
    this.sleepMode = sleepMode
    if (this.sleepMode) {
        console.log('Спящий режим включен');
    } else {
        console.log('Спящий режим выключен');
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
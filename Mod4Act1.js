class Person 
{
    _firstName;
    _lastName;
    _age;
    _sex;
    static hasError = 0;

    constructor(firstName, lastName, age, birthDate, sex)
    {
        Person.hasError = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDate = new Date(birthDate);
        this.sex = sex;
    }

    set firstName(value)
    {
        if (value.trim() === "")
        {
            Person.hasError++;
            alert("First Name field must not be empty.");
            throw new Error();
        }
        if (!Person.isAlphabetic(value))
        {
            Person.hasError++;
            alert("First Name must contain only alphabetical characters.");
            throw new Error();
        }  
        this._firstName = value;
    }

    get firstName()
    {
        return this._firstName;
    }

    set lastName(value)
    {
        if (value.trim() === "")
        {
            Person.hasError++;
            alert("Last Name field must not be empty.");
            throw new Error();
        }
        if (!Person.isAlphabetic(value))
        {
            Person.hasError++;
            alert("Last Name must contain only alphabetical characters.");
            throw new Error();
        }  
        this._lastName = value;
    }
    get lastName()
    {
        return this._lastName;
    }

    set age(value)
    {
        if (isNaN(value) || value === "") {
            Person.hasError++;
            alert("Age must be a number and must not be empty");
            throw new Error();
        }
        if (!Person.isValidAge(value))
        {
            Person.hasError++;
            alert("Age not possible");
            throw new Error();
        }
        this._age = value;
    }
    get age()
    {
        return this._age;
    }
    
    set birthDate(value)
    {
        console.log(value);
        if (!(value instanceof Date) || isNaN(value.getTime()))
        {
            Person.hasError++;
            alert("Birth Date must not be empty");
            throw new Error();
        }
        this._birthDate = value;
    }
    get birthDate()
    {
        return this._birthDate;
    }

    set sex(value)
    {
        if (!Person.isValidSex(value))
        {
            Person.hasError++;
            alert("Invalid character or empty input in Sex field.");
            throw new Error();
        }
        this._sex = value;
    }
    get sex()
    {
        return this._sex;
    }

    fullName()
    {
        return this._firstName + " " + this._lastName;
    }

    formattedBirthDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = this.birthDate.getFullYear();
        const month = months[this.birthDate.getMonth()];
        const day = this.birthDate.getDate();
        return `${month} ${day}, ${year}`;
    }

    static isAlphabetic(value)
    {
        if (/^[A-Za-z]+$/.test(value))
        {
            return true;
        } 
        return false;
    }
    

    static isValidAge(value)
    {
        if (value >= 0 && value <= 150)
        {
            return true;
        }
        return false;
    }

    static isValidSex(value)
    {
        if (value === "M" || value === "F")
        {
            return true;
        }
        return false;
    }
}

class Doctor extends Person
{
    _specialty;
    static hasError = 0;

    constructor(firstName, lastName, specialty)
    {
        Doctor.hasError = 0;
        super(firstName, lastName, age, birthDate, sex);
        this.specialty = specialty;
        
    }

    set firstName(value)
    {
        if (value.trim() === "")
        {
            Doctor.hasError++;
            alert("Doctor First Name field must not be empty.");
            throw new Error();
        }
        if (!Doctor.isAlphabetic(value))
        {
            Doctor.hasError++;
            alert("Doctor First Name must contain only alphabetical characters.");
            throw new Error();
        }  
        this._firstName = value;
    }

    set lastName(value)
    {
        if (value.trim() === "")
        {
            Doctor.hasError++;
            alert("Doctor Last Name field must not be empty.");
            throw new Error();
        }
        if (!Doctor.isAlphabetic(value))
        {
            Doctor.hasError++;
            alert("Doctor Last Name must contain only alphabetical characters.");
            throw new Error();
        }  
        this._lastName = value;
    }

    set age(value)
    {
        this._age = value;
    }
    get age()
    {
        return this.age = value;
    }

    set birthDate(value)
    {
        this._birthDate = value;
    }
    get birthDate()
    {
        return this._birthDate;
    }

    set sex(value)
    {
        this._sex = value;
    }
    get sex()
    {
        return this._sex;
    }
    

    set specialty(value)
    {
        var lettersOnly = /^[A-Za-z]+$/;

        if (!lettersOnly.test(value))
        {
            Doctor.hasError++;
            alert("Doctor specialization must not be empty and only contain alphabetical characters");
            throw new Error();
        }
        this._specialty = value;
    }
    get specialty()
    {
        return this._specialty;
    }

    static isAlphabetic(value)
    {
        if (/^[A-Za-z]+$/.test(value))
        {
            return true;
        } 
        return false;
    }
}

class Patient extends Person
{
    _patientId;
    _doctorName;
    _admitDate;
    _dischargeDate;
    static hasError = 0;

    constructor(firstName, lastName, patientId, age, sex, birthDate, doctorName, admitDate, dischargeDate)
    {
        Patient.hasError = 0;
        super(firstName, lastName, age, birthDate, sex);
        this.patientId = patientId;
        this.doctorName = doctorName;
        this.admitDate = new Date(admitDate);
        this.dischargeDate = new Date(dischargeDate);
    }

    set patientId(value) {
        if (typeof value !== 'string' || value.trim() === "") {
            Patient.hasError++;
            alert("Invalid patient ID. It must not be blank and accept numbers only.");
            throw new Error();
        }
        this._patientId = value;
    }
    get patientId()
    {
        return this._patientId;
    }
    
    set doctorName(value)
    {
        this._doctorName = value;
    }
    get doctorName()
    {
        return this._doctorName;
    }

    set admitDate(value)
    {
        if (!(value instanceof Date) || isNaN(value.getTime()))
        {
            Patient.hasError++;
            alert("Admit Date must not be empty");
            throw new Error();
        }
        else if (!this.isValidAdmitDate(value))
        {
            this.hasError++;
            alert("Admit Date is must not be earlier than or equal to Birth Date.");
            throw new Error();
        }
        this._admitDate = value;
    }
    get admitDate()
    {
        return this._admitDate;
    }

    set dischargeDate(value)
    {
        if (!(value instanceof Date) || isNaN(value.getTime()))
        {
            Patient.hasError++;
            alert("Discharge Date must not be empty");
            throw new Error();
        }
        else if (!this.isValidDischargeDate(value))
        {
            this.hasError++;
            alert("Discharge Date must not be earlier than or equal to Admittance Date.");
            throw new Error();
        }
        this._dischargeDate = value;
    }
    get dischargeDate()
    {
        return this._dischargeDate;
    }

    formattedAdmitDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = this.admitDate.getFullYear();
        const month = months[this.admitDate.getMonth()];
        const day = this.admitDate.getDate();
        return `${month} ${day}, ${year}`;
    }
    
    formattedDischargeDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = this.dischargeDate.getFullYear();
        const month = months[this.dischargeDate.getMonth()];
        const day = this.dischargeDate.getDate();
        return `${month} ${day}, ${year}`;
    }
    
    isValidAdmitDate(value){ 
        return value.getTime() > this.birthDate.getTime();
    }

    isValidDischargeDate(value){  
        return value.getTime() > this.admitDate.getTime();
    }   
}

class Bill
{
    _pharmacyCharge;
    _doctorFee;
    _roomCharge;
    _patientId;
    static hasError = 0;

    constructor(patientId, pharmacyCharge, doctorFee, roomCharge)
    {
        Bill.hasError = 0;
        this.patientId = patientId;
        this.pharmacyCharge = pharmacyCharge;
        this.doctorFee = doctorFee;
        this.roomCharge = roomCharge;
    }

    set pharmacyCharge(value)
    {
        if (isNaN(value) || value === "") {
            Bill.hasError++;
            alert("Pharmacy Charge must be a number and must not be empty");
            throw new Error();
        }
        this._pharmacyCharge = value; 
    }
    get pharmacyCharge()
    {
        return "$" + this._pharmacyCharge;
    }

    set doctorFee(value)
    {
        if (isNaN(value) || value === "") {
            Bill.hasError++;
            alert("Doctor Fee must be a number and must not be empty");
            throw new Error();
        }
        this._doctorFee = value;
    }
    get doctorFee()
    {
        return "$" + this._doctorFee;
    }

    set roomCharge(value)
    {
        if (isNaN(value) || value === "") {
            Bill.hasError++;
            alert("Room Charge must be a number and must not be empty");
            throw new Error();
        }
        this._roomCharge = value;
    }
    get roomCharge()
    {
        return "$" + this._roomCharge;
    }

    total()
    {
        const totalAmount = parseFloat(this._pharmacyCharge) + parseFloat(this._doctorFee) + parseFloat(this._roomCharge);
        return "$" + totalAmount.toFixed(2);
    }
}

function generateBill()
{

    const doctor = new Doctor(
        document.getElementById("doctorFirstName").value,
        document.getElementById("doctorLastName").value,
        document.getElementById("doctorSpecialty").value
    );

    const patient = new Patient(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("patientId").value,
        document.getElementById("age").value,
        document.getElementById("sex").value,
        document.getElementById("birthDate").value,
        doctor.firstName + " " + doctor.lastName,
        document.getElementById("admitDate").value,
        document.getElementById("dischargeDate").value
    );

    const bill = new Bill(
        patient.patientId,
        document.getElementById("pharmacyCharge").value,
        document.getElementById("doctorFee").value,
        document.getElementById("roomCharge").value,
    );

    
    if (Person.hasError > 0 || Patient.hasError > 0 || Doctor.hasError > 0 || Bill.hasError > 0)
    {
        // Stops data manipulation of GUI
        return;
    }

    let bDisplay = document.getElementById("billContainer");
    bDisplay.style.display = "block";

    document.getElementById("bPatientName").innerHTML = patient.fullName();
    document.getElementById("bPatientId").innerHTML = patient.patientId;
    document.getElementById("bAge").innerHTML = patient.age;
    document.getElementById("bSex").innerHTML = patient.sex;
    document.getElementById("bBirthDate").innerHTML = patient.formattedBirthDate();
    document.getElementById("bAdmitDate").innerHTML = patient.formattedAdmitDate();
    document.getElementById("bDischargeDate").innerHTML = patient.formattedDischargeDate();

    document.getElementById("bDoctorName").innerHTML = doctor.fullName();
    document.getElementById("bDoctorSpecialty").innerHTML = doctor.specialty;

    document.getElementById("bPharmacyCharge").innerHTML = bill.pharmacyCharge;
    document.getElementById("bDoctorFee").innerHTML = bill.doctorFee;
    document.getElementById("bRoomCharge").innerHTML = bill.roomCharge;
    document.getElementById("bTotal").innerHTML = bill.total();
}


function Neural (parents) {
	if(parents.father !== null || parents.mother !== null) {
		// if parents exist, it's a hidden neural
		this.father = parents.father;
		this.mother = parents.mother;
	}
	// if no parents, it's an input neural
	this.fatherInput = false;
	this.motherInput = false;
	this.memory = [null, null, null, null];
}

Neural.prototype.output = function () {
	if(this.father !== null || this.mother !== null) {
		// if it's a hidden neural retrieve inputs recurcevly from parents
		this.fatherInput = this.father.output();
		this.motherInput = this.mother.output();
	}
	if(this.fatherInput === false && this.motherInput === false) {
		if(this.memory[0] !== null){
			return this.memory[0];
		} else if(this.memory[1] !== null){
			return this.memory[1];
		} else if(this.memory[2] !== null){
			return this.memory[2];
		} else if(this.memory[3] !== null){
			return this.memory[3];
		} else {
			return false;
		}
	} else if(this.fatherInput === false && this.motherInput === true) {
		if(this.memory[1] !== null){
			return this.memory[1];
		} else if(this.memory[0] !== null){
			return this.memory[0];
		} else if(this.memory[3] !== null){
			return this.memory[3];
		} else if(this.memory[2] !== null){
			return this.memory[2];
		} else {
			return false;
		}
	} else if(this.fatherInput === true && this.motherInput === false) {
		if(this.memory[2] !== null){
			return this.memory[2];
		} else if(this.memory[0] !== null){
			return this.memory[0];
		} else if(this.memory[3] !== null){
			return this.memory[3];
		} else if(this.memory[1] !== null){
			return this.memory[1];
		} else {
			return false;
		}
	} else if(this.fatherInput === true && this.motherInput === true)  {
		if(this.memory[3] !== null){
			return this.memory[3];
		} else if(this.memory[2] !== null){
			return this.memory[2];
		} else if(this.memory[1] !== null){
			return this.memory[1];
		} else if(this.memory[0] !== null){
			return this.memory[0];
		} else {
			return false;
		}
	} else {
		return null;
	}
}

Neural.prototype.input = function (inputs){
	this.motherInput = inputs.mother;
	this.fatherInput = inputs.father;
}
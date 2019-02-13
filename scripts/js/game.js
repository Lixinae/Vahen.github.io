
var player = {
		name: 'Your Name',
		energy: 100, 
		lives: 2,
		x: 19,
		y: 100,
		color: 'blue',
		weapons:["sword","gun"],
		
		/* Methode d'objet */
		addWeapon: function(newWeapon){
			weapons.push(newWeapon);
		},
		
		addEnergy: function(bonusEnergy){
			if(bonusEnergy < 0){
				bonusEnergy = 0;
			}
			energy += bonusEnergy;
		}
	};

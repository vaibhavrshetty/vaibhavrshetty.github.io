var names=new Array();
names[0]="Vaibhav";
names[1]="Vinayak";
names[2]="Vinroy";
names[3]="Saurav";
names[4]="Sonali";
names[5]="Tulsi";
names[6]="Trupthi";
names[7]="Sinchana";
names[8]="Jason";
names[9]="Manish";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
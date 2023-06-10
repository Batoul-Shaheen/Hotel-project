class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum,roomNum,price,isBooked){
       this.floorNum=floorNum;
       this.roomNum=roomNum;
       this.price=price;
       this.#isBooked=isBooked;
    }

    set isBooked(isBooked){
        this.#isBooked=isBooked;
    }
   get isBooked(){
       return this.#isBooked;
    }


 printRoom(){
   console.log("ROOM# " + this.roomNum + "FloorNum = " + this.floorNum +  " Price = " + this.price);
   }
 book(){
    this.#isBooked = true;
   }

 isBooked(){
    return this.#isBooked;
   }

}
class RoomWithView extends Room{
    view;
    numberOfBeds;
    constructor(floorNum,roomNum,price,isBooked,view,numberOfBeds){
        super(floorNum,roomNum,price,isBooked);
        this.view=view;
        this.numberOfBeds=numberOfBeds;
       
    }

}

class SleepingRoom extends Room{
    personCapacity;
    constructor(floorNum,roomNum,price,isBooked,_personCapacity){
        super(floorNum,roomNum,price,isBooked);
        this.personCapacity;
        
    }
}
class Hotel{
    Address;
    NumOfRooms;
    #minFloor;
    #maxFloor;
    rooms=[Room];
    constructor(Address,NumOfRooms,minFloor,maxFloor, rooms){
        this.Address=Address;
        this.NumOfRooms=NumOfRooms;
        this.#minFloor=minFloor;
        this.#maxFloor=maxFloor;
        this.rooms=rooms;
    }
    

        set minFloor(minFloor){
             this.#minFloor=minFloor;
      }
        get minFloor(){
            return this.#minFloor;
      }

        set maxFloor(maxFloor){
            this.#maxFloor=maxFloor;
      }
        get maxFloor(){
           return this.#maxFloor;
      }
        

    printAdvertisemen(){
        console.log( "Welcome to " + this.Address +" "+ "Hotel");
    }

    listBookedRooms(){
        for( let i = 0 ; i< this.rooms.length ; i++){
            if(this.rooms[i].isBooked() == true ){
                console.log( "Booked Room is " + this.rooms[i].roomNum );
            }
        }

    }
}


const r1 = new Room (1, 5, 500, false);
r1.printRoom();
console.log(r1.isBooked());

const r2 = new RoomWithView(3, 6, 300, true, "Beach", 3);

const r3 = new SleepingRoom(2, 3, 650, true, 3);
r3.printRoom();
console.log(r3.isBooked());

const h = new Hotel ("Carmel", 11, 1, 11, [r1,r2,r3]);
h.printAdvertisemen();
h.listBookedRooms();
 
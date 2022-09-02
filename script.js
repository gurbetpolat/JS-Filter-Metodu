/***Filter Metodu******/

const number=[12,5,7,9,1,3,6,17,18,45,20,4]

const filtreleme=number.filter((num)=>{
     
    return num>10 && num<30

})
console.log(number);
console.log(filtreleme)

/*--------------------------------------*/

const names=["Emre","Buse","Tuba","Gurbet","Fatih","Ece","Seda","Sema"]

const sec=names.filter((name)=>{
     
    return name.length<=4;
})

console.log(sec)

/*--------------------------------*/

const users=[
    {
        name:"Gurbet",
        age:23
    },
    {
        name:"Reşat",
        age:20
    },
    {
        name:"Emre",
        age:23
    },
    {
        name:"Merve",
        age:21
    }
]

const yassec=users.filter((user)=>{
    return user.age===23
})

console.log(yassec)//emre ve gurbet döner

/*----------------------------------*/

const names2=["Emre","Cemre","Gurbet","Buse","Erdem"]

const sec2=names2.filter((name)=>{
    return name.includes("em")
})

console.log(sec2)



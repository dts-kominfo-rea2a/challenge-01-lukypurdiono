// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const favColor1 = new Set(["Yellow", "Pink", "White", "Purple"]);
const arrColor1 = Array.from(favColor1);

const favColor2 = new Set(["Blue", "Black", "Grey"]);
const arrColor2 = Array.from(favColor2);

const favoriteRestaurant1 = new Set([
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
]);
const arrResto1 = Array.from(favoriteRestaurant1);

const favoriteRestaurant2 = new Set([
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
]);
const arrResto2 = Array.from(favoriteRestaurant2);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: arrColor1,
    isHavePet: true,
    education: [{
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },
        {
            name: "SMA 03",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: arrResto1,
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: arrColor2,
    isHavePet: false,
    education: [{
            name: "SD 02",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016,
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: arrResto2,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
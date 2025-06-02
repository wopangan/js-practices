const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $50', 'Pasta - $28', 'Burger - $25', 'Salmon - $55'];
const dessertMenu = ['Cake - $10', 'Ice Cream - $4', 'Pudding - $6', 'Fruit Salad - $12'];

// Using map method to iterate through the breakfast menu
const breakfastMenuHTML = breakfastMenu.map((item) => `<p>${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHTML;

// Using forEach method to traverse mainCourseMenu
let mainCourseItem = ''; 
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Using for loop iteration for the dessert menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
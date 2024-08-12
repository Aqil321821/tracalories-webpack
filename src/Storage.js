//storage class 
class Storage {
    //if already in localstorage get it from storage 
    static getCalorieLimit(defaultLimit = 2000) {
        let calorieLimit;
        if (localStorage.getItem('calorieLimit') === null) {
            calorieLimit = defaultLimit;
        } else {
            calorieLimit = +localStorage.getItem('calorieLimit');
        }
        return calorieLimit;
    }

    //set calorie limit to the storage
    static setCalorieLimit(calorieLimit) {
        localStorage.setItem('calorieLimit', calorieLimit);
    }

    //get or set totalCalories 

    static getTotalCalories(defaultCalories = 0) {
        let totalCalories;
        if (localStorage.getItem('totalCalories') === null) {
            totalCalories = defaultCalories;
        } else {
            totalCalories = +localStorage.getItem('totalCalories');
        }
        return totalCalories;
    }


    //set totalCalories 
    static updateTotalCalories(calories) {
        localStorage.setItem('totalCalories', calories);
    }


    //get meals or set meals to storage 
    static getMeals() {
        let meals;
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    static saveMeal(meal) {
        const meals = Storage.getMeals();
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
    }


    //remove meal from storage          
    static removeMeal(id) {
        const meals = Storage.getMeals();
        meals.forEach((meal, index) => {
            if (meal.id === id) {
                meals.splice(index, 1);
            }
        });
        localStorage.setItem('meals', JSON.stringify(meals));
    }



    //get workout or set workouts to storage
    static getWorkouts() {
        let workouts;
        if (localStorage.getItem('workouts') === null) {
            workouts = [];
        } else {
            workouts = JSON.parse(localStorage.getItem('workouts'));
        }
        return workouts;
    }


    static saveWorkout(workout) {
        const workouts = Storage.getWorkouts();
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }


    //remove workout from storage 
    static removeWorkout(id) {
        const workouts = Storage.getWorkouts();
        workouts.forEach((workout, index) => {
            if (workout.id === id) {
                workouts.splice(index, 1);
            }
        });
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }


    static clearAll() {
        // localStorage.clear();
        localStorage.removeItem('meals');
        localStorage.removeItem('workouts');
        localStorage.removeItem('totalCalories');



    }



}



export default Storage;
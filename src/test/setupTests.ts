import { createPinia, setActivePinia } from "pinia";

// Ensures that each test suite has Pinia configured 
function setup(): void {
    setActivePinia(createPinia());
}

setup();
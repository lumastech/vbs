<template>
    <div class="max-w-7xl mx-auto px-2">
        <Head title="POST PLNA" />
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h1 class="md:text-2xl mb-4 flex-auto">UPLOAD A PLAN</h1>
            <Link href="/plans" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                <i class="fa-solid fa-arrow-left mr-2"></i>
                <span>Back to Plans</span>
            </Link>
        </div>
        <form @submit.prevent="upload" action="#" class="capitalize">
            <div
                class="shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded"
            >
                <div class="col-span-4">
                    <div>
                        <label for="name">
                            type
                            <span v-if="errors.name" class="text-red-600"> - {{ errors.name }}</span>
                        </label>
                        <select
                            v-model="plan.name"
                            id="name"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.name , 'border-teal-500': !errors.name}"
                        >
                            <option value="1 Bedroom">1 Bedroom</option>
                            <option value="2 Bedroom">2 Bedroom</option>
                            <option value="3 Bedroom">3 Bedroom</option>
                            <option value="4 Bedroom">4 Bedroom</option>
                            <option value="5 Bedroom">5 Bedroom</option>
                            <option value="6 Bedroom">6 Bedroom</option>
                        </select>
                    </div>

                    <div>
                        <label for="price">
                            Price
                            <span v-if="errors.price" class="text-red-600"> - {{ errors.price }}</span>
                        </label>
                        <input
                            v-model="plan.price"
                            type="number"
                            name="price"
                            id="price"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.price , 'border-teal-500': !errors.price}"
                        />
                    </div>

                    <div>
                        <label for="style">
                            style
                            <span v-if="errors.style" class="text-red-600"> - {{ errors.style }}</span>
                        </label>
                        <select
                            v-model="plan.style"
                            id="style"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.style , 'border-teal-500': !errors.style}"
                        >
                            <option value="Commercial Buildinngs">
                                Commercial Buildinngs
                            </option>
                            <option value="Apartments">Apartments</option>
                            <option value="Hostels and Lodges">
                                Hostels and Lodges
                            </option>
                            <option value="Duplex Desings">
                                Duplex Desings
                            </option>
                            <option value="Modern House Plans">
                                Modern House Plans
                            </option>
                            <option value="Small Houses">Small Houses</option>
                            <option value="Beach House Plans">
                                Beach House Plans
                            </option>
                            <option value="Contemporary House Plans">
                                Contemporary House Plans
                            </option>
                            <option value="Meditaerranean House Plans">
                                Meditaerranean House Plans
                            </option>
                            <option value="Farm House Plans">
                                Farm House Plans
                            </option>
                        </select>
                    </div>

                    <div>
                        <label for="roof_finish" class="mt-"
                            >Roof Finish
                            <span v-if="errors.roof_finish" class="text-red-600"> - {{ errors.roof_finish }}</span>
                        </label>
                        <select
                            v-model="plan.roof_finish"
                            name="roof_finish"
                            id="roof_finish"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.roof_finish , 'border-teal-500': !errors.roof_finish}"
                        >
                            <option value="Gable roof">Gable roof</option>
                            <option value="Hip and valley roof">
                                Hip and valley roof
                            </option>
                            <option value="Simple Hip roof">
                                Simple Hip roof
                            </option>
                            <option value="Cross Hipped roof">
                                Cross Hipped roof
                            </option>
                            <option value="Hexagonal roof">
                                Hexagonal roof
                            </option>
                            <option value="Dutch Roof">Dutch Roof</option>
                            <option value="Open Gable Roof">
                                Open Gable Roof
                            </option>
                            <option value="Cross Gable Roof">
                                Cross Gable Roof
                            </option>
                            <option value="Mansard roof">Mansard roof</option>
                            <option value="Skillion and Lean to Roof">
                                Skillion and Lean to Roof
                            </option>
                            <option value="Flat roof">Flat roof</option>
                            <option value="Shed roof">Shed roof</option>
                            <option value="Butterfly roof">
                                Butterfly roof
                            </option>
                            <option value="Gambrel roof">Gambrel roof</option>
                            <option value="Dormer roof">Dormer roof</option>
                            <option value="M Shaped Roof">M Shaped Roof</option>
                            <option value="Front Gable Roof">
                                Front Gable Roof
                            </option>
                            <option value="Curved Roof">Curved Roof</option>
                        </select>
                    </div>
                </div>

                <div class="col-span-2">
                    <div>
                        <label for="bedrooms">
                            Bedrooms
                            <span v-if="errors.bedrooms" class="text-red-600"> - {{ errors.bedrooms }}</span>
                        </label>
                        <input
                            v-model="plan.bedrooms"
                            type="number"
                            name="bedrooms"
                            id="bedrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.bedrooms , 'border-teal-500': !errors.bedrooms}"
                        />
                    </div>

                    <div>
                        <label for="bathrooms">
                            bathrooms
                            <span v-if="errors.bathrooms" class="text-red-600"> - {{ errors.bathrooms }}</span>
                        </label>
                        <input
                            v-model="plan.bathrooms"
                            type="number"
                            name="bathrooms"
                            id="bathrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.bathrooms , 'border-teal-500': !errors.bathrooms}"
                        />
                    </div>

                    <div>
                        <label for="levels">
                            levels
                            <span v-if="errors.levels" class="text-red-600"> - {{ errors.levels }}</span>
                        </label>
                        <input
                            v-model="plan.levels"
                            type="number"
                            name="levels"
                            id="levels"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.levels , 'border-teal-500': !errors.levels}"
                        />
                    </div>

                    <div>
                        <label for="area">
                            area
                            <span v-if="errors.area" class="text-red-600"> - {{ errors.area }}</span>
                        </label>
                        <input
                            v-model="plan.area"
                            type="number"
                            id="area"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.area , 'border-teal-500': !errors.area}"
                        />
                    </div>
                </div>
            </div>

            <div class="shadow-xs py-2 px-4 bg-white/90 my-7 rounded">
                <label for="description">
                    Description
                    <span v-if="errors.description" class="text-red-600"> - {{ errors.description }}</span>
                </label>
                <textarea
                    v-model="plan.description"
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                    :class="{'border-red-500': errors.description , 'border-teal-500': !errors.description}"
                ></textarea>
            </div>



            <div class="text-right px-4">
                <button
                    class="bg-secondary-600 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all"
                >
                    UPLOAD
                </button>
            </div>
        </form>
    </div>
    <LoadingAnim :show="plan.processing" />
</template>
<script>
import { ref } from "vue";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import LoadingAnim from "@/Components/LoadingAnim.vue";
import { Link, Head, useForm } from "@inertiajs/vue3";
export default {
    components: { DashboardLayout, Link, Head, LoadingAnim },
    layout: DashboardLayout,
    props: {
        errors: Object,
    },
    setup() {
        const plan = useForm({
            name: "1 Bedroom",
            price: '',
            style: "Apartments",
            roof_finish: "Simple Hip roof",
            bathrooms: 1,
            bedrooms: 1,
            levels: 1,
            area: '',
            description: "",
        });

        // submit plan form
        const upload = () => {
            // plan.defaults()
            setTimeout(() => {
                plan.post(route("plans.store"));
            }, 3000)
        };
        return {
            plan,
            upload,
        };
    },

};
</script>

<style>
.thumb{
    background-image: url("../../../assets/addimg.png");
    background-position: 50%;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;

}
</style>

<template>
    <div class="max-w-7xl mx-auto px-2">
        <Head title="Dashboard" />
        <h1 class="text-2xl mb-4">UPLOAD A PLAN</h1>
        <form @submit.prevent="upload" action="#" class="capitalize">
            <div
                class="shadow p-4 grid md:grid-cols-2 md:gap-4 bg-white/50 rounded"
            >
                <div>
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
                        <label for="roof_finish" class="mt-9"
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

                <div>
                    <div>
                        <label for="bedrooms">
                            N0# of bedrooms
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

            <div class="shadow py-2 px-4 bg-white/50 my-7 rounded">
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

            <!-- images -->
            <div
                class="border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40"
            >
                <!-- image input list -->
                <h2 class="text-xl mb-2">
                    Select at least one image.
                </h2>
                <div
                    class="thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(1)"
                    >
                        <img
                            alt=""
                            :src="preview_1"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 0)"
                            oncancel="clearimage(this, 0)"
                            accept="image/*"
                            type="file"
                            ref="image_1"
                            id="image_1"
                            class="hidden"
                        />
                        <label for="image_1"
                            >Image 1*
                            <span v-if="errors.image_1" class="text-red-600">
                                - {{ errors.image_1 }}</span
                            ></label
                        >
                    </div>

                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(2)"
                    >
                        <img
                            alt=""
                            :src="preview_2"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 1)"
                            type="file"
                            ref="image_2"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_2"
                            >Image 2
                            <span v-if="errors.image_2" class="text-red-600">
                                - {{ errors.image_2 }}</span
                            ></label
                        >
                    </div>

                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(3)"
                    >
                        <img
                            alt=""
                            :src="preview_3"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 2)"
                            type="file"
                            ref="image_3"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_3"
                            >Image 3
                            <span v-if="errors.image_3" class="text-red-600">
                                - {{ errors.image_3 }}</span
                            ></label
                        >
                    </div>

                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(4)"
                    >
                        <img
                            alt=""
                            :src="preview_4"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 3)"
                            type="file"
                            ref="image_4"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_4"
                            >Image 4
                            <span v-if="errors.image_4" class="text-red-600">
                                - {{ errors.image_4 }}</span
                            ></label
                        >
                    </div>

                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(5)"
                    >
                        <img
                            alt=""
                            :src="preview_5"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 4)"
                            type="file"
                            ref="image_5"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_5"
                            >Image 5
                            <span v-if="errors.image_5" class="text-red-600">
                                - {{ errors.image_5 }}</span
                            ></label
                        >
                    </div>

                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(6)"
                    >
                        <img
                            alt=""
                            :src="preview_6"
                            class="w-full aspect-video border-0"
                        />
                        <input
                            @change="imagePreview($event, 5)"
                            type="file"
                            ref="image_6"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_6"
                            >Image 6
                            <span v-if="errors.image_6" class="text-red-600">
                                - {{ errors.image_6 }}</span
                            ></label
                        >
                    </div>

                    <!-- extra blured plan -->
                    <div
                        class="thumb shadow rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all"
                        @click="selectFile(7)"
                    >
                        <img
                            alt=""
                            :src="preview_7"
                            class="w-full aspect-video"
                        />
                        <input
                            @change="imagePreview($event, 6)"
                            type="file"
                            ref="image_7"
                            accept="image/*"
                            class="hidden"
                        />
                        <label for="image_7"
                            >Image 7
                            <span v-if="errors.image_7" class="text-red-600">
                                - {{ errors.image_7 }}</span
                            ></label
                        >
                    </div>
                </div>
            </div>

            <!-- files -->
            <div
                class="shadow rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/50"
            >
                <!-- files -->
                <h2 class="text-2xl mb-2 mt-9">Select plan files</h2>
                <p>
                    If files are not avairrable now, you skip this section
                </p>
                <div class="mb-9 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <input
                            @change="imagePreview($event, 7)"
                            type="file"
                            name="file_1"
                            id="file_1"
                            class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"
                        />
                        <label for="file_1"
                            >File 1
                            <span v-if="errors.file_1"
                                class="text-red-600 text-teal-500"
                            >
                                - {{ errors.file_1 }}</span
                            ></label
                        >
                    </div>
                    <div>
                        <input
                            @change="imagePreview($event, 8)"
                            type="file"
                            name="file_2"
                            id="file_2"
                            class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"
                        />
                        <label for="file_2"
                            >File 2
                            <span v-if="errors.file_2"
                                class="text-red-600 text-teal-500"
                            >
                                - {{ errors.file_2 }}</span
                            ></label
                        >
                    </div>
                    <div>
                        <input
                            @change="imagePreview($event, 9)"
                            type="file"
                            name="file_3"
                            id="file_3"
                            class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"
                        />
                        <label for="file_3"
                            >File 3
                            <span v-if="errors.file_3"
                                class="text-red-600 text-teal-500"
                            >
                                - {{ errors.file_3 }}</span
                            ></label
                        >
                    </div>
                    <div>
                        <input
                            @change="imagePreview($event, 10)"
                            type="file"
                            name="file_4"
                            id="file_4"
                            class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"
                        />
                        <label for="file_4"
                            >File 4
                            <span v-if="errors.file_4"
                                class="text-red-600 text-teal-500"
                            >
                                - {{ errors.file_4 }}</span
                            ></label
                        >
                    </div>
                </div>
            </div>

            <div class="text-right px-4">
                <button
                    class="bg-secondary-600 shadow text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all"
                >
                    UPLOAD
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import { Link, Head, useForm } from "@inertiajs/vue3";
export default {
    components: { DashboardLayout, Link, Head },
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
            image_1: null,
            image_2: null,
            image_3: null,
            image_4: null,
            image_5: null,
            image_6: null,
            image_7: null,
            file_1: null,
            file_2: null,
            file_3: null,
            file_4: null,
        });

        const preview_1 = ref("");
        const preview_2 = ref("");
        const preview_3 = ref("");
        const preview_4 = ref("");
        const preview_5 = ref("");
        const preview_6 = ref("");
        const preview_7 = ref("");

        const image_1 = ref(null);
        const image_2 = ref(null);
        const image_3 = ref(null);
        const image_4 = ref(null);
        const image_5 = ref(null);
        const image_6 = ref(null);
        const image_7 = ref(null);

        const selectFile = (pos) => {
            switch (pos) {
                case 1:
                    image_1.value.click();
                    break;
                case 2:
                    image_2.value.click();
                    break;
                case 3:
                    image_3.value.click();
                    break;
                case 4:
                    image_4.value.click();
                    break;
                case 5:
                    image_5.value.click();
                    break;
                case 6:
                    image_6.value.click();
                    break;
                case 7:
                    image_7.value.click();
                    break;
            }
        };

        const imagePreview = (el, pos) => {
            var url = URL.createObjectURL(el.target.files[0]);
            console.log(url);
            switch (pos) {
                case 0:
                    preview_1.value = url;
                    plan.image_1 = el.target.files[0];
                    break;
                case 1:
                    preview_2.value = url;
                    plan.image_2 = el.target.files[0];
                    break;
                case 2:
                    preview_3.value = url;
                    plan.image_3 = el.target.files[0];
                    break;
                case 3:
                    preview_4.value = url;
                    plan.image_4 = el.target.files[0];
                    break;
                case 4:
                    preview_5.value = url;
                    plan.image_5 = el.target.files[0];
                    break;
                case 5:
                    preview_6.value = url;
                    plan.image_6 = el.target.files[0];
                    break;
                case 6:
                    preview_7.value = url;
                    plan.image_7 = el.target.files[0];
                    break;

                case 7:
                    plan.file_1 = el.target.files[0];
                    break;
                case 8:
                    plan.file_2 = el.target.files[0];
                    break;
                case 9:
                    plan.file_3 = el.target.files[0];
                    break;
                case 10:
                    plan.file_4 = el.target.files[0];
                    break;
            }
        };

        // submit plan form
        const upload = () => {
            // plan.defaults()
            plan.post(route("plans.store"));
        };
        return {
            selectFile,
            imagePreview,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            image_6,
            image_7,

            preview_1,
            preview_2,
            preview_3,
            preview_4,
            preview_5,
            preview_6,
            preview_7,

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

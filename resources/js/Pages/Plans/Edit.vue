<template>
    <div class="max-w-7xl mx-auto px-2">
        <Head title="EDIT PLAN" />
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h1 class="md:text-2xl mb-4 flex-auto">EDIT PLAN</h1>
            <Link href="/plans" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                <i class="fa-solid fa-arrow-left mr-2"></i>
                <span>Back to Plans</span>
            </Link>
        </div>
        <form @submit.prevent="upload" action="#" class="capitalize">
            <div
                class="shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded mb-16"
            >
                <div class="col-span-4">
                    <div>
                        <label for="name">
                            type
                            <span v-if="errors.name" class="text-red-600">
                                - {{ errors.name }}</span
                            >
                        </label>
                        <select
                            v-model="plan.name"
                            id="name"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.name,
                                'border-teal-500': !errors.name,
                            }"
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
                            <span v-if="errors.price" class="text-red-600">
                                - {{ errors.price }}</span
                            >
                        </label>
                        <input
                            v-model="plan.price"
                            type="number"
                            name="price"
                            id="price"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.price,
                                'border-teal-500': !errors.price,
                            }"
                        />
                    </div>

                    <div>
                        <label for="style">
                            style
                            <span v-if="errors.style" class="text-red-600">
                                - {{ errors.style }}</span
                            >
                        </label>
                        <select
                            v-model="plan.style"
                            id="style"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.style,
                                'border-teal-500': !errors.style,
                            }"
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
                        <label for="roof_finish" class=""
                            >Roof Finish
                            <span
                                v-if="errors.roof_finish"
                                class="text-red-600"
                            >
                                - {{ errors.roof_finish }}</span
                            >
                        </label>
                        <select
                            v-model="plan.roof_finish"
                            name="roof_finish"
                            id="roof_finish"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.roof_finish,
                                'border-teal-500': !errors.roof_finish,
                            }"
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
                            <span v-if="errors.bedrooms" class="text-red-600">
                                - {{ errors.bedrooms }}</span
                            >
                        </label>
                        <input
                            v-model="plan.bedrooms"
                            type="number"
                            name="bedrooms"
                            id="bedrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.bedrooms,
                                'border-teal-500': !errors.bedrooms,
                            }"
                        />
                    </div>

                    <div>
                        <label for="bathrooms">
                            bathrooms
                            <span v-if="errors.bathrooms" class="text-red-600">
                                - {{ errors.bathrooms }}</span
                            >
                        </label>
                        <input
                            v-model="plan.bathrooms"
                            type="number"
                            name="bathrooms"
                            id="bathrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.bathrooms,
                                'border-teal-500': !errors.bathrooms,
                            }"
                        />
                    </div>

                    <div>
                        <label for="levels">
                            levels
                            <span v-if="errors.levels" class="text-red-600">
                                - {{ errors.levels }}</span
                            >
                        </label>
                        <input
                            v-model="plan.levels"
                            type="number"
                            name="levels"
                            id="levels"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.levels,
                                'border-teal-500': !errors.levels,
                            }"
                        />
                    </div>

                    <div>
                        <label for="area">
                            area
                            <span v-if="errors.area" class="text-red-600">
                                - {{ errors.area }}</span
                            >
                        </label>
                        <input
                            v-model="plan.area"
                            type="number"
                            id="area"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{
                                'border-red-500': errors.area,
                                'border-teal-500': !errors.area,
                            }"
                        />
                    </div>
                </div>
                <div class="col-span-6">
                    <label for="description">
                        Description
                        <span v-if="errors.description" class="text-red-600">
                            - {{ errors.description }}</span
                        >
                    </label>
                    <textarea
                        v-model="plan.description"
                        name="description"
                        id="description"
                        cols="30"
                        rows="5"
                        class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                        :class="{
                            'border-red-500': errors.description,
                            'border-teal-500': !errors.description,
                        }"
                    ></textarea>
                </div>
                <div class="text-right px-4 col-span-6">
                    <button
                        @click="update()"
                        class="bg-teal-500/70 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-teal-700 transition-all"
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </form>


        <!-- images -->
        <div class="border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40">
            <!-- image input list -->
            <div class="flex justify-between gap-4 mb-4 place-items-center">
                <h1 class="md:text-2xl mb-4 flex-auto">PLAN IMAGES</h1>
                <button @click="()=>{ imageUploadShow=true }" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                    <i class="fa-solid fa-plus mr-2"></i>
                    <span>Upload Image</span>
                </button>
            </div>
            <div class="thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="image in images" :key="image.id" class="thumb-bg relative shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all">
                    <img :alt="image.name" :src="image.image" class="w-full aspect-video" />
                    <label class="px-2">{{image.name}}</label>
                    <button @click="showConfirmDelete(image)" class="absolute top-1 right-1 text-red-500 p-1 rounded-full bg-red-100/50 hover:bg-red-100 w-8 h-8 transition-all"><i class="far fa-trash-can"></i></button>
                </div>
                <!-- image add -->
                <div @click="()=>{ imageUploadShow=true }" class="thumb aspect-video border !border-teal-500 p-2 text-center text-teal-500 shadow-xs rounded bg-teal-100 hover:bg-gray-300 overflow-hidden hover:scale-95 transition-all">
                    <label>ADD IMAGE</label>
                </div>
            </div>
        </div>


        <!-- files -->
        <div class="shadow-xs rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/90">
            <!-- file input list -->
            <div class="flex justify-between gap-4 mb-4 place-items-center">
                <h1 class="md:text-2xl mb-4 flex-auto">PLAN FILES</h1>
                <button @click="()=>{ imageUploadShow=true }" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                    <i class="fa-solid fa-plus mr-2"></i>
                    <span>Upload File</span>
                </button>
            </div>
            <div class="thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="file in files" :key="file.id" class="thumb-bg relative shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all">
                    <img :alt="file.name" :src="file.file" class="w-full aspect-video" />
                    <label class="px-2">{{file.name}}</label>
                    <button @click="showConfirmDelete(file)" class="absolute top-1 right-1 text-red-500 p-1 rounded-full bg-red-100/50 hover:bg-red-100 w-8 h-8 transition-all"><i class="far fa-trash-can"></i></button>
                </div>
                <!-- file add -->
                <div @click="()=>{ fileUploadShow=true }" class="thumb aspect-video border !border-sky-500 p-2 text-center text-sky-500 shadow-xs rounded bg-sky-100 hover:bg-gray-300 overflow-hidden hover:scale-95 transition-all">
                    <label>ADD FILE</label>
                </div>
            </div>
        </div>
    </div>

    <!-- IMAGE UPLOAD MODAL -->
    <Modal :show="imageUploadShow">
        <form @submit.prevent="imageUpload" class="p-1">
            <div class="thumb shadow-xs rounded bg-gray-100"
                @click="selectFile(1)" >
                <img alt="" :src="preview" class="w-full aspect-video"/>
                <input @change="filePreview($event, 'image')" oncancel="clearimage(this, 0)" accept="image/*"
                    type="file"
                    ref="image"
                    id="image"
                    class="hidden"
                />
            </div>
            <input v-model="imageForm.name" type="text" class="block w-full rounded mt-2 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500" placeholder="Image name">
            <div class="md:flex text-center space-x-2">
                <div class="flex-auto p-2 md:text-left">
                    <label for="image" >Image
                        <span v-if="imageForm.errors.file" class="text-red-600"> - {{ imageForm.errors.file }}</span>
                        <span v-if="imageForm.errors.name" class="text-red-600"> - {{ imageForm.errors.name }}</span>
                    </label>
                </div>
                <button @click="() => { imageUploadShow = false }" class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
                <button class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">UPLOAD</button>
            </div>
        </form>
    </Modal>

    <!-- FILE UPLOAD MODAL -->
    <Modal :show="fileUploadShow">
        <form @submit.prevent="uploadFile" class="p-4">
            <div>
                <label for="file">Select a File
                    <span v-if="fileForm.errors.file" class="text-red-600 text-teal-500" > - {{ fileForm.errors.file }}</span>
                </label>
                <input
                    @change="filePreview($event, 'file')"
                    type="file"
                    name="file"
                    id="file"
                    class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500"
                />

            </div>
            <label for="image" class="mt-2">File Name
                <span v-if="fileForm.errors.name" class="text-red-600"> - {{ fileForm.errors.name }}</span>
            </label>
            <input v-model="fileForm.name" type="text" class="block w-full rounded border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500" placeholder="Image name">
            <div class="flex text-center space-x-2 mt-4">
                <div class="flex-auto p-2 md:text-left">

                </div>
                <button @click="() => { fileUploadShow = false }" class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
                <button class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">UPLOAD</button>
            </div>
        </form>
    </Modal>

    <ConfirmationModal :show="confirmDelete.show">
        <template v-slot:title>
            {{ confirmDelete.title }}
        </template>
        <template v-slot:content>
            <p>{{confirmDelete.content}}</p>
        </template>
        <template v-slot:footer>
            <button @click="() => { confirmDelete.show = false }" class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
            <button @click="deleteImage()" class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">DELETE</button>
        </template>
    </ConfirmationModal>
</template>
<script>
import { ref } from "vue";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import { Link, Head, useForm, router } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import axios from "axios";
export default {
    components: { DashboardLayout, Link, Head, Modal, ConfirmationModal },
    layout: DashboardLayout,
    props: {
        plan: Object,
        errors: Object,
        images: Object,
        files: Object,
    },
    setup(props, refs) {
        const imageUploadShow = ref(false);
        const fileUploadShow = ref(false);
        const form = useForm({
            name: "1 Bedroom",
            price: "",
            style: "Apartments",
            roof_finish: "Simple Hip roof",
            bathrooms: 1,
            bedrooms: 1,
            levels: 1,
            area: "",
            description: "",
        });

        const confirmDelete = ref({
            show: 0,
            title: 'DELETE',
            content: "are you sure you want to delete this item?",
            confirm: '#',
        })

        const image = ref("image")

        //IMAGE FORM
        const imageForm = useForm({
            file: null,
            name: null,
            type: 'image',
            plan: props.plan.id
        })

        // FILE FORM
        const fileForm = useForm({
            file: null,
            name: null,
            type: 'file',
            plan: props.plan.id
        })

        const preview = ref("");

        const selectFile = (pos) => {
            image.value.click();
        };

        const filePreview = (el, type) => {
            if (type == 'image') {
                preview.value = URL.createObjectURL(el.target.files[0]);
                imageForm.file = el.target.files[0];
            } else {
                fileForm.file = el.target.files[0];
            }
        };

        // submit plan form
        const update = () => {
            let plan = props.plan;
            form.name = plan.name;
            form.price = plan.price;
            form.style = plan.style;
            form.roof_finish = plan.roof_finish;
            form.bathrooms = plan.bathrooms;
            form.bedrooms = plan.bedrooms;
            form.levels = plan.levels;
            form.area = plan.area;
            form.description = plan.description;

            form.put(route("plans.update", props.plan));
        };

        // submit plan form
        const imageUpload = () => {
            imageForm.post(route("image.store"),  {
                options: {
                    onSuccess: ()=>{
                    imageUploadShow.value = 0;
                }
                }
            });
        };

        // submit plan form
        const uploadFile = () => {
            imageForm.post(route("file.store"),  {
                options: {
                    onSuccess: ()=>{
                    imageUploadShow.value = 0;
                }
                }
            });
        };

        const showConfirmDelete = (image) => {
            confirmDelete.value.title = 'DELETE '+ image.name + " IMAGE?",
            confirmDelete.value.content = "are you sure you want to delete this item?",
            confirmDelete.value.confirm = image,
            confirmDelete.value.show = true
        }

        // delete image
        const deleteImage = () => {
            router.delete(route("image.destroy", confirmDelete.value.confirm.id), {
                onSuccess: () => {
                    confirmDelete.value.show = 0;
                }
            });
        };

        return {
            selectFile,
            filePreview,
            imageUploadShow,
            fileUploadShow,
            imageForm,
            fileForm,
            imageUpload,
            uploadFile,
            deleteImage,
            confirmDelete,
            showConfirmDelete,
            image,
            preview,
            update,
        };
    },
};
</script>

<style>
.thumb {
    background-image: url("../../../assets/addimg.png");
    background-position: 50%;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>

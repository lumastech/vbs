<template>
    <div class="max-w-7xl mx-auto px-2">

        <Head title="EDIT PROPERTY" />
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h1 class="md:text-2xl mb-4 flex-auto">EDIT PROPERTY</h1>
            <Link href="/property"
                class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
            <i class="fa-solid fa-arrow-left mr-2"></i>
            <span>Back to Property</span>
            </Link>
        </div>
        <div class="flex bg-sky-500 px-2 py-2 text-white">
            <h1 class="flex-auto self-center font-bold">Property Details</h1>
            <button @click="addpropModal = 1"
                class="px-4 py-2 bg-white text-teal-500 rounded text-sm hover:bg-teal-100 transition">ADD
                PROPERTY TYPE</button>
        </div>
        <form @submit.prevent="update" action="#" class="capitalize">
            <div class="shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded">
                <div class="col-span-4">
                    <div>
                        <label for="title">
                            Title
                            <span v-if="errors.title" class="text-red-600"> - {{ errors.title }}</span>
                        </label>
                        <input v-model="property.title" type="text" name="title" id="title"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.title, 'border-teal-500': !errors.title }" />
                    </div>

                    <div>
                        <label for="address">
                            Address
                            <span v-if="errors.address" class="text-red-600"> - {{ errors.address }}</span>
                        </label>
                        <input v-model="property.address" type="text" name="address" id="address"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.address, 'border-teal-500': !errors.address }" />
                    </div>
                    <div>
                        <label for="city">
                            City
                            <span v-if="errors.city" class="text-red-600"> - {{ errors.city }}</span>
                        </label>
                        <input v-model="property.city" type="text" name="city" id="city"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.city, 'border-teal-500': !errors.city }" />
                    </div>
                    <div>
                        <label for="state">
                            State
                            <span v-if="errors.state" class="text-red-600"> - {{ errors.state }}</span>
                        </label>
                        <input v-model="property.state" type="text" name="state" id="state"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.state, 'border-teal-500': !errors.state }" />
                    </div>
                    <div>
                        <label for="postal_code">
                            Postal_code
                            <span v-if="errors.postal_code" class="text-red-600"> - {{ errors.postal_code }}</span>
                        </label>
                        <input v-model="property.postal_code" type="text" name="postal_code" id="postal_code"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.postal_code, 'border-teal-500': !errors.postal_code }" />
                    </div>

                    <div>
                        <label for="country">
                            Country
                            <span v-if="errors.country" class="text-red-600"> - {{ errors.country }}</span>
                        </label>
                        <input v-model="property.country" type="text" name="country" id="country"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.country, 'border-teal-500': !errors.country }" />
                    </div>
                </div>

                <div class="col-span-2">
                    <div>
                        <label for="price">
                            Price
                            <span v-if="errors.price" class="text-red-600"> - {{ errors.price }}</span>
                        </label>
                        <input v-model="property.price" type="number" name="price" id="price"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.price, 'border-teal-500': !errors.price }" />
                    </div>
                    <div>
                        <label for="bedrooms">
                            Bedrooms
                            <span v-if="errors.bedrooms" class="text-red-600"> - {{ errors.bedrooms }}</span>
                        </label>
                        <input v-model="property.bedrooms" type="number" name="bedrooms" id="bedrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.bedrooms, 'border-teal-500': !errors.bedrooms }" />
                    </div>

                    <div>
                        <label for="bathrooms">
                            bathrooms
                            <span v-if="errors.bathrooms" class="text-red-600"> - {{ errors.bathrooms }}</span>
                        </label>
                        <input v-model="property.bathrooms" type="number" name="bathrooms" id="bathrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.bathrooms, 'border-teal-500': !errors.bathrooms }" />
                    </div>

                    <div>
                        <label for="lot_size">
                            lot_size
                            <span v-if="errors.lot_size" class="text-red-600"> - {{ errors.lot_size }}</span>
                        </label>
                        <input v-model="property.lot_size" type="number" name="lot_size" id="lot_size"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.lot_size, 'border-teal-500': !errors.lot_size }" />
                    </div>

                    <div>
                        <label for="square_feet">
                            Square_feet
                            <span v-if="errors.square_feet" class="text-red-600"> - {{ errors.square_feet }}</span>
                        </label>
                        <input v-model="property.square_feet" type="number" id="square_feet"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.square_feet, 'border-teal-500': !errors.square_feet }" />
                    </div>
                    <div>
                        <label for="property_type_id">
                            Property type
                            <span v-if="errors.property_type_id" class="text-red-600"> - {{ errors.property_type_id
                                }}</span>
                        </label>
                        <select v-model="property.property_type_id" id="property_type_id"
                            placeholder="select property type"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.property_type_id, 'border-teal-500': !errors.property_type_id }">
                            <option v-for="type in property_types" :key="type.id" :value="type.id" selected>{{
                                type.name}}</option>
                        </select>
                    </div>
                    <div>
                        <label for="property_type_id">
                            Status
                            <span v-if="errors.status" class="text-red-600"> - {{ errors.status
                                }}</span>
                        </label>
                        <select v-model="property.status" id="status" placeholder="select property Status"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.status, 'border-teal-500': !errors.status }">
                            <option value="active">Active</option>
                            <option value="inactive">Hide</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="shadow-xs py-2 px-4 bg-white/90 my-7 rounded">
                <label for="description">
                    Description
                    <span v-if="errors.description" class="text-red-600"> - {{ errors.description }}</span>
                </label>
                <textarea v-model="property.description" name="description" id="description" cols="30" rows="5"
                    class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                    :class="{ 'border-red-500': errors.description, 'border-teal-500': !errors.description }"></textarea>
            </div>

            <div class="text-right px-4">
                <button
                    class="bg-secondary-600 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all">
                    POST
                </button>
            </div>
        </form>


        <!-- images -->
        <div class="border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40">
            <!-- image input list -->
            <div class="flex justify-between gap-4 mb-4 place-items-center">
                <h1 class="md:text-2xl mb-4 flex-auto">PROPERTY IMAGES</h1>
                <button @click="()=>{ imageUploadShow=true }"
                    class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                    <i class="fa-solid fa-plus mr-2"></i>
                    <span>Upload Image</span>
                </button>
            </div>
            <div class="thumb-cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="image in images" :key="image.id"
                    class="thumb-bg relative shadow-xs rounded bg-gray-100 hover:bg-gray-300 overflow-hidden hover:scale-105 transition-all">
                    <img :alt="image.name" :src="image.image" class="w-full aspect-video" />
                    <label class="px-2">{{image.name}}</label>
                    <button @click="showConfirmDelete(image, 'image.destroy')"
                        class="absolute top-1 right-1 text-red-500 p-1 rounded-full bg-red-100/50 hover:bg-red-100 w-8 h-8 transition-all"><i
                            class="far fa-trash-can"></i></button>
                </div>
                <!-- image add -->
                <div class="text-center">
                    <div @click="()=>{ imageUploadShow=true }"
                        class="thumb aspect-video border !border-teal-500 p-2 shadow-xs rounded bg-teal-50 hover:bg-gray-300 overflow-hidden hover:scale-95 transition-all">
                    </div>
                    <label class="text-teal-500">ADD IMAGE</label>
                </div>
            </div>
        </div>
    </div>

    <!-- IMAGE UPLOAD MODAL -->
    <Modal :show="imageUploadShow">
        <div class="bg-teal-500 px-4 py-1 text-white font-bold">UPLOAD AN IMAGE</div>
        <form @submit.prevent="imageUpload" class="p-1">
            <div class="thumb-bg shadow-xs rounded bg-gray-100" @click="selectFile(1)">
                <img alt="" :src="preview" class="w-full aspect-video" />
                <input @change="filePreview($event, 'image')" oncancel="clearimage(this, 0)" accept="image/*"
                    type="file" ref="image" id="image" class="hidden" />
            </div>
            <input v-model="imageForm.name" type="text"
                class="block w-full rounded mt-2 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Image name">
            <div class="md:flex text-center space-x-2">
                <div class="flex-auto p-2 md:text-left">
                    <label for="image">Image
                        <span v-if="imageForm.errors.file" class="text-red-600"> - {{ imageForm.errors.file }}</span>
                        <span v-if="imageForm.errors.name" class="text-red-600"> - {{ imageForm.errors.name }}</span>
                    </label>
                </div>
                <button @click="() => { imageUploadShow = false }"
                    class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
                <button
                    class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">UPLOAD</button>
            </div>
        </form>
    </Modal>

    <!-- FILE UPLOAD MODAL -->
    <Modal :show="fileUploadShow">
        <div class="bg-teal-500 px-4 py-1 text-white font-bold">UPLOAD A FILE </div>
        <form @submit.prevent="uploadFile" class="p-4">
            <div v-if="fileForm.errors.file" class="bg-red-100 p-2 rounded-2 text-red-500">{{fileForm.errors.file}}
            </div>
            <div>
                <label for="file">Select a File
                    <span v-if="fileForm.errors.file" class="text-red-600 text-teal-500"> - {{ fileForm.errors.file
                        }}</span>
                </label>
                <input @change="filePreview($event, 'file')" type="file" name="file" id="file"
                    class="border border-teal-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500" />

            </div>
            <label for="image" class="mt-2">File Name
                <span v-if="fileForm.errors.name" class="text-red-600"> - {{ fileForm.errors.name }}</span>
            </label>
            <input v-model="fileForm.name" type="text"
                class="block w-full rounded border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Image name">
            <div class="flex text-center space-x-2 mt-4">
                <div class="flex-auto p-2 md:text-left">

                </div>
                <button @click="() => { fileUploadShow = false }"
                    class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
                <button
                    class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">UPLOAD</button>
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
            <button @click="() => { confirmDelete.show = false }"
                class="px-4 py-1 mt-2 bg-gray-300/70 shadow-xs text- rounded hover:bg-gray-400 transition-all">CANCEL</button>
            <button @click="deleteFile()"
                class="px-4 py-1 mt-2 bg-teal-500/70 shadow-xs text-white rounded hover:bg-teal-700 transition-all">DELETE</button>
        </template>
    </ConfirmationModal>
    <Modal :show="addpropModal" maxWidth="sm">
        <div class="flex bg-sky-500 px-2 py-2 text-white">
            <h1 class="flex-auto self-center font-bold">Property Details</h1>
            <button @click="() => { addpropModal = 0 }">
                <i class="fas fa-close"></i>
            </button>
        </div>
        <div class="p-2">
            <label for="property_type">
                Property Type
                <span v-if="errors.property_type" class="text-red-600"> - {{ errors.property_type }}</span>
            </label>
            <input v-model="property_type" type="text" id="property_type"
                class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                :class="{ 'border-red-500': errors.property_type, 'border-teal-500': !errors.property_type }" />
            <button @click="postProperty"
                class="px-4 py-2 bg-teal-500 text-white rounded text-sm hover:bg-teal-600 transition">SAVE</button>
        </div>
    </Modal>

    <LoadingAnim :show="loader" />
</template>
<script>
import { ref } from "vue";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import { Link, Head, useForm, router } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
import LoadingAnim from "@/Components/LoadingAnim.vue";
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
export default {
    components: { DashboardLayout, Link, Head, Modal, ConfirmationModal, LoadingAnim },
    layout: DashboardLayout,
    props: {
        property: Object,
        errors: Object,
        images: Object,
        files: Object,
        property_types: Object,
    },
    setup(props, refs) {
        const imageUploadShow = ref(false);
        const fileUploadShow = ref(false);
        const loader = ref(false);
        const addpropModal = ref(0)
        const property_type = ref(null)
        const form = useForm({
            title: null,
            price: null,
            address: null,
            city: null,
            state: null,
            postal_code: null,
            country: null,
            bedrooms: null,
            bathrooms: null,
            square_feet: null,
            lot_size: null,
            property_type_id: null,
            description: null,
            status: null
        });

        const confirmDelete = ref({
            show: 0,
            title: 'DELETE',
            content: "are you sure you want to delete this item?",
            id: null,
            url: null
        })

        const image = ref("image")

        //IMAGE FORM
        const imageForm = useForm({
            file: null,
            name: null,
            type: 'property',
            item: props.property.id
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

        // submit property form
        const update = () => {
            let property = props.property;
            form.title = property.title;
            form.price = property.price;
            form.address = property.address;
            form.city = property.city;
            form.state = property.state;
            form.postal_code = property.postal_code;
            form.country = property.country;
            form.bedrooms = property.bedrooms;
            form.bathrooms = property.bathrooms;
            form.square_feet = property.square_feet;
            form.lot_size = property.lot_size;
            form.property_type_id = property.property_type_id;
            form.description = property.description;
            form.status = property.status;
            form.put(route("property.update", props.property), {
                onBefore: () => { loader.value = 1;},
                onFinish:()=>{loader.value = 0;}
            });
        };

        // submit property images form
        const imageUpload = () => {
            imageUploadShow.value = 0;
            loader.value = 1;
            router.post(route("image.store"), imageForm, {
                onSuccess: (data)=>{
                    imageUploadShow.value = 0;
                    imageForm.reset();
                    imageForm.property = props.property.id;
                    preview.value = ''
                },
                onError: (err) => {
                    imageUploadShow.value = 1;
                    if (err && err.file) {
                        imageForm.errors.file = err.file
                    }
                    if (err && err.name) {
                        imageForm.errors.name = err.name
                    }
                },
                onFinish: () => {loader.value = 0;}
            })
        };

        const showConfirmDelete = (file, url) => {
            confirmDelete.value.title = 'DELETE '+ file.name + " file?",
            confirmDelete.value.content = "are you sure you want to delete this item?",
            confirmDelete.value.id = file,
            confirmDelete.value.url = url,
            confirmDelete.value.show = true
        }

        // delete image
        const deleteFile = () => {
            router.delete(route(confirmDelete.value.url, confirmDelete.value.id.id), {
                onSuccess: () => {
                    confirmDelete.value.show = 0;
                }
            });
        };

        // post property type
        const postProperty = () => {
            router.post(route('property-type.store'), { name: property_type.value }, {
                onSuccess: () => { addpropModal.value = 0 }
            })
        }

        return {
            loader,
            selectFile,
            filePreview,
            imageUploadShow,
            fileUploadShow,
            imageForm,
            imageUpload,
            deleteFile,
            confirmDelete,
            showConfirmDelete,
            image,
            preview,
            update,
            addpropModal,
            property_type,
            postProperty,
        };
    },
    mounted() {
        if (!this.images.length) {
            this.imageUploadShow = 1;
        }
    }
};
</script>

<style>
.thumb {
    background-image: url("../../../assets/ad_icon.png");
    background-position: 50%;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
}

.thumb-bg {
    background-image: url("../../../assets/addimg.png");
    background-position: 50%;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>

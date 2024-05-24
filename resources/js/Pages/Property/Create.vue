<template>
    <div class="max-w-7xl mx-auto px-2">

        <Head title="POST PROPERTY" />
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h1 class="md:text-2xl mb-4 flex-auto">UPLOAD A PROPERTY</h1>
            <Link href="/properties"
                class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
            <i class="fa-solid fa-arrow-left mr-2"></i>
            <span>Back to PROPERTIES</span>
            </Link>
        </div>
        <div class="flex bg-sky-500 px-2 py-2 text-white">
            <h1 class="flex-auto self-center font-bold">Property Details</h1>
            <button @click="() => { addpropModal = true }"
                class="px-4 py-2 bg-white text-teal-500 rounded text-sm hover:bg-teal-100 transition">ADD
                PROPERTY TYPE</button>
        </div>
        <form @submit.prevent="upload" action="#" class="capitalize">
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
                        <label for="price">
                            Price
                            <span v-if="errors.price" class="text-red-600"> - {{ errors.price }}</span>
                        </label>
                        <input v-model="property.price" type="number" name="price" id="price"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{ 'border-red-500': errors.price, 'border-teal-500': !errors.price }" />
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
                        <label for="bedrooms">
                            Bedrooms
                            <span v-if="errors.bedrooms" class="text-red-600"> - {{ errors.bedrooms }}</span>
                        </label>
                        <input v-model="property.bedrooms" type="number" name="bedrooms" id="bedrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.bedrooms , 'border-teal-500': !errors.bedrooms}" />
                    </div>

                    <div>
                        <label for="bathrooms">
                            bathrooms
                            <span v-if="errors.bathrooms" class="text-red-600"> - {{ errors.bathrooms }}</span>
                        </label>
                        <input v-model="property.bathrooms" type="number" name="bathrooms" id="bathrooms"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.bathrooms , 'border-teal-500': !errors.bathrooms}" />
                    </div>

                    <div>
                        <label for="lot_size">
                            lot_size
                            <span v-if="errors.lot_size" class="text-red-600"> - {{ errors.lot_size }}</span>
                        </label>
                        <input v-model="property.lot_size" type="number" name="lot_size" id="lot_size"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.lot_size , 'border-teal-500': !errors.lot_size}" />
                    </div>

                    <div>
                        <label for="square_feet">
                            Square_feet
                            <span v-if="errors.square_feet" class="text-red-600"> - {{ errors.square_feet }}</span>
                        </label>
                        <input v-model="property.square_feet" type="number" id="square_feet"
                            class="block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500"
                            :class="{'border-red-500': errors.square_feet , 'border-teal-500': !errors.square_feet}" />
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
                            :class="{'border-red-500': errors.property_type_id , 'border-teal-500': !errors.property_type_id}">
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
                    :class="{'border-red-500': errors.description , 'border-teal-500': !errors.description}"></textarea>
            </div>



            <div class="text-right px-4">
                <button
                    class="bg-secondary-600 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all">
                    POST
                </button>
            </div>
        </form>
    </div>
    <Modal :show="addpropModal" maxWidth="sm">
        <div class="flex bg-sky-500 px-2 py-2 text-white">
            <h1 class="flex-auto self-center font-bold">Property Details</h1>
            <button @click="()=>{addpropModal = 0}">
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
    <LoadingAnim :show="property.processing" />
</template>
<script>
import { ref } from "vue";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import LoadingAnim from "@/Components/LoadingAnim.vue";
import { Link, Head, useForm, router } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
export default {
    components: { DashboardLayout, Link, Head, LoadingAnim, Modal },
    layout: DashboardLayout,
    props: {
        errors: Object,
        property_types: Object,
    },
    setup() {
        const addpropModal = ref(0)
        const property_type = ref(null)
        const property = useForm({
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
            status: 'active'
        });

        // submit property form
        const upload = () => {
            property.post(route("property.store"));
        };

        const postProperty = () => {
            router.post(route('property-type.store'), { name: property_type.value }, {
                onSuccess: ()=>{ addpropModal.value = 0}
            })
        }
        return {
            property,
            upload,
            addpropModal,
            property_type,
            postProperty,
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

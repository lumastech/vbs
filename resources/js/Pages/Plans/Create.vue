<template>
<div class="max-w-7xl mx-auto px-2">
    <Head title="Dashboard" />
    <h1 class="text-2xl mb-4">UPLOAD A PLAN</h1>
    <form action="#" class="capitalize">
        <div class="shadow p-4 grid md:grid-cols-2 md:gap-4 bg-white/50 rounded">
            <div>
                <div>
                    <label for="name">type</label>
                    <select id="name" class="block w-full rounded mb-3">
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedroom">2 Bedroom</option>
                        <option value="3 Bedroom">3 Bedroom</option>
                        <option value="4 Bedroom">4 Bedroom</option>
                        <option value="5 Bedroom">5 Bedroom</option>
                        <option value="6 Bedroom">6 Bedroom</option>
                    </select>
                </div>

                <div>
                    <label for="price"></label>
                    <input type="number" name="price" id="price" class="block w-full rounded mb-3">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text" class="block w-full rounded mb-3">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text" class="block w-full rounded mb-3">
                </div>
            </div>

            <div>
                <div>
                    <label for="name">type</label>
                    <select id="name" class="block w-full rounded mb-3">
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedroom">2 Bedroom</option>
                        <option value="3 Bedroom">3 Bedroom</option>
                        <option value="4 Bedroom">4 Bedroom</option>
                        <option value="5 Bedroom">5 Bedroom</option>
                        <option value="6 Bedroom">6 Bedroom</option>
                    </select>
                </div>

                <div>
                    <label for="price"></label>
                    <input type="number" name="price" id="price" class="block w-full rounded mb-3">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text" class="block w-full rounded mb-3">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text" class="block w-full rounded mb-3">
                </div>
            </div>
        </div>

        <div class="shadow py-2 px-4 bg-white/50 my-7 rounded">
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="5" class="block w-full rounded mb-3"></textarea>
        </div>

        <!-- images -->
        <div class="border rounded p-2 md:p-4 max-w-7xl mx-auto bg-white/40">
            <!-- image input list -->
            <h2 class="text-2xl mb-2">Select preview images to be uploaded</h2>
            <div class="thumb-cont grid grid-cols-4 gap-4">
                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(1)">
                    <img src="" alt="" ref="preview_1" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 0)" oncancel="clearimage(this, 0)" accept="image/*" type="file" ref="image_1" id="image_1" class="hidden">
                    <label for="image_1">Image 1 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_1 }}</span></label>
                </div>

                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(2)">
                    <img src="" alt="" ref="preview_2" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 1)" type="file" ref="image_2" accept="image/*" class="hidden">
                    <label for="image_2">Image 2 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_2 }}</span></label>
                </div>

                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(3)">
                    <img src="" alt="" ref="preview_3" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 2)" type="file" ref="image_3" accept="image/*" class="hidden">
                    <label for="image_3">Image 3 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_3 }}</span></label>
                </div>

                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(4)">
                    <img src="" alt="" ref="preview_4" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 3)" type="file" ref="image_4" accept="image/*" class="hidden">
                    <label for="image_4">Image 4 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_4 }}</span></label>
                </div>

                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(5)">
                    <img src="" alt="" ref="preview_5" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 4)" type="file" ref="image_5" accept="image/*" class="hidden">
                    <label for="image_5">Image 5 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_5 }}</span></label>
                </div>

                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(6)">
                    <img src="" alt="" ref="preview_6" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 5)" type="file" ref="image_6" accept="image/*" class="hidden">
                    <label for="image_6">Image 6 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_6 }}</span></label>
                </div>

                <!-- extra blured plan -->
                <div class="thumb bg-gray-100 hover:bg-gray-300 transition-all" @click="selectFile(7)">
                    <img src="" alt="" ref="preview_7" class="w-full aspect-video rounded overflow-hidden">
                    <input @change="imagePreview(this, 6)" type="file" ref="image_7" accept="image/*" class="hidden">
                    <label for="image_7">Image 7 <span class="text-red-600 rounded-md bg-red-50 p-1"> - {{ errors.image_7 }}</span></label>
                </div>

            </div>
        </div>


        <!-- files -->
        <div class="rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto bg-white/50">
            <!-- files -->
            <h2 class="text-2xl mb-2 mt-9">Select plan files</h2>
            <p>If files are not avairrable now, you skip this step by clicking add later button bellow.</p>
            <div class="mb-9 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <input type="file" name="file_1" id="file_1" class="border border-gray-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500">
                    <label for="file_1">File 1 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ errors.file_1}}</span></label>
                </div>
                <div>
                    <input type="file" name="file_2" id="file_2" class="border border-gray-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500">
                    <label for="file_2">File 2 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ errors.file_2 }}</span></label>
                </div>
                <div>
                    <input type="file" name="file_3" id="file_3" class="border border-gray-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500">
                    <label for="file_3">File 3 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ errors.file_3 }}</span></label>
                </div>
                <div>
                    <input type="file" name="file_4" id="file_4" class="border border-gray-500 py-2 bg-white w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500">
                    <label for="file_4">File 4 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ errors.file_4 }}</span></label>
                </div>
            </div>
        </div>
    </form>
</div>
</template>
<script>
import { ref } from 'vue';
import DashboardLayout from '../../Layouts/DashboardLaout.vue';
import { Link, Head, useForm } from '@inertiajs/vue3';
    export default {
        components:{DashboardLayout, Link, Head},
        layout: DashboardLayout,
        props: {
            auth:Object,
            users: Number,
            visitors: Number,
            plans: Object,
            sales: Number,
            plans_count: Number,
            errors:Object,
        },
        setup() {
            const plan = useForm()

            const preview_1 = ref(null)
            const preview_2 = ref(null)
            const preview_3 = ref(null)
            const preview_4 = ref(null)
            const preview_5 = ref(null)
            const preview_6 = ref(null)
            const preview_7 = ref(null)

            const image_1 = ref(null)
            const image_2 = ref(null)
            const image_3 = ref(null)
            const image_4 = ref(null)
            const image_5 = ref(null)
            const image_6 = ref(null)
            const image_7 = ref(null)

            const selectFile = (pos) => {

            }

            const imagePreview = (file, pos) => {
                switch (pos) {
                    case 1:
                        preview_1.value.click()
                        break
                }
            }
            return {
                selectFile, imagePreview
            }
        }
    }
</script>

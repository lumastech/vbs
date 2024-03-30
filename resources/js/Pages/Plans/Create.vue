<template>
<div class="max-w-7xl mx-auto px-2">
    <Head title="Dashboard" />
    <h1>UPLOAD A PLAN</h1>
    <form action="#">
        <div class="shadow p-2 grid grid-cols-2 gap-4">
            <div>
                <div>
                    <label for="name">type</label>
                    <select id="name">
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
                    <input type="number" name="price" id="price">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text">
                </div>
            </div>

            <div>
                <div>
                    <label for="name">type</label>
                    <select id="name">
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
                    <input type="number" name="price" id="price">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text">
                </div>
            </div>
        </div>

        <div class="shadow p-2 bg-white">
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>

        <!-- images -->
        <div class="shadow p-2 bg-white">
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>


        <!-- files -->
        <div class="rounded p-2 md:p-4 border my-9 max-w-7xl mx-auto">
            <!-- files -->
            <h2 class="text-2xl mb-2 mt-9">Select plan files</h2>
            <p>If files are not avairrable now, you skip this step by clicking add later button bellow.</p>
            <input type="hidden" name="plan_id" value="<?php echo $plan_id ?>">
            @csrf
            <div class="mb-9 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <input type="file" name="file_1" id="file_1" class="border w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500" value="{{ old('file_1') }}">
                    <label for="file_1">File 1 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ $page.$errors.file_1}}</span></label>
                </div>
                <div>
                    <input type="file" name="file_2" id="file_2" class="border w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500" value="{{ old('file_2') }}">
                    <label for="file_2">File 2 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ $page.$errors.file_2 }}</span></label>
                </div>
                <div>
                    <input type="file" name="file_3" id="file_3" class="border w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500" value="{{ old('file_3') }}">
                    <label for="file_3">File 3 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ $page.$errors.file_3 }}</span></label>
                </div>
                <div>
                    <input type="file" name="file_4" id="file_4" class="border w-full overflow-hidden rounded focus:ring-4 focus:ring-teal-500" value="{{ old('file_4') }}">
                    <label for="file_4">File 4 <span class="text-red-600 rounded-md bg-red-50 p-1 text-teal-500"> - {{ $page.$errors.file_4 }}</span></label>
                </div>
            </div>
        </div>
    </form>
</div>
</template>
<script>
import DashboardLayout from '../../Layouts/DashboardLaout.vue';
import { Link, Head } from '@inertiajs/vue3';
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
    },
    setup() {
        return {
            sideToggle() {
                document.getElementById('side').classList.toggle('hidden');
            }
        }
    }
    }
</script>

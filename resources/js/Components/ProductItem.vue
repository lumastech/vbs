<template>
    <Link href="/plan/1" class="relative aspect-video shadow rounded hover:scale-105 transition overflow-hidden">
        <img src="../../assets/landing_cover.jpg" alt="3 bed rooms" class="w-full aspect-video">
        <div class="absolute top-0 w-full h-full hover:bg-primary-900/50 transition">

            <h5 class="bg-secondary-900/50 absolute w-full px-2 top-0">3 bedrooms</h5>

            <div class="absolute bottom-0 bg-secondary-900/50 w-full">
                <div class="grid grid-cols-3">
                    <div class="overflow-hidden">
                        <span>1 store</span>
                    </div>
                    <div class="overflow-hidden">
                        <span>1 bedr</span>
                    </div>
                    <div class="overflow-hidden">
                        <span>1 br</span>
                    </div>
                </div>
                <div class="grid grid-cols-3">
                    <div class="overflow-hidden">
                        <span>Gable</span>
                    </div>
                    <div class="overflow-hidden">
                        <span>Commencial</span>
                    </div>
                    <div class="overflow-hidden">
                        <span>200 <sup>2m</sup></span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
    components: {Link}
}
</script>
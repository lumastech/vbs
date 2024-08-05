<template>
    <div>
        <!-- Header -->
        <!-- <header class="bg-white shadow-lg">
            <div class="container mx-auto flex justify-between items-center py-4 px-6">
                <div class="text-2xl font-bold text-gray-800">Village Bank</div>
                <nav class="hidden md:flex space-x-4">
                    <a href="/features" class="text-gray-600 hover:text-gray-800">Features</a>
                    <a href="/about" class="text-gray-600 hover:text-gray-800">About</a>
                    <a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
                    <a href="/testing" class="text-gray-600 hover:text-gray-800">Testing</a>
                    <a @click="closeMobileMenu" href="/" class="text-gray-600 hover:text-gray-800"></a>
                </nav>
                <div class="flex">
                    <a href="/login" class="hidden md:block ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Login</a>
                    <a href="/register" class="hidden md:block ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Join
                        Now</a>
                </div>
                <-- Hamburger Icon for Mobile --
                <div @click="toggleMobileMenu" class="md:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>

            !-- Mobile Menu --
            <div v-if="isMobileMenuOpen" class="md:hidden">
                <nav class="flex flex-col items-center space-y-4 py-4 bg-gray-100">
                    <a @click="closeMobileMenu" href="/features" class="text-gray-600 hover:text-gray-800">Features</a>
                    <a @click="closeMobileMenu" href="/about" class="text-gray-600 hover:text-gray-800">About</a>
                    <a @click="closeMobileMenu" href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
                    <a @click="closeMobileMenu" href="/testing" class="text-gray-600 hover:text-gray-800">Testing</a>
                    <a @click="closeMobileMenu" href="/login"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</a>
                         <a @click="closeMobileMenu" href="/register"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg">Join
                        Now</a>
                </nav>
            </div>
        </header> -->
        <Navbar />

        <!-- Hero Section -->
        <section class="bg-gray-100 text-center py-20">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Empowering Communities with Village Banking</h1>
            <p class="text-gray-600 mb-8">Join our community to save, invest, and grow together.</p>
            <a href="/register" class="px-8 py-4 bg-blue-600 text-white rounded-lg">Get Started</a>
        </section>

        <!-- Features Section -->
        <section id="features" class="container mx-auto py-20">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <img src="path/to/icon1.svg" alt="Feature 1" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Secure Savings</h3>
                    <p class="text-gray-600">Keep your money safe with our secure savings accounts.</p>
                </div>
                <div class="text-center">
                    <img src="path/to/icon2.svg" alt="Feature 2" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Easy Loans</h3>
                    <p class="text-gray-600">Apply for loans and get approved quickly and easily.</p>
                </div>
                <div class="text-center">
                    <img src="path/to/icon3.svg" alt="Feature 3" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Community Support</h3>
                    <p class="text-gray-600">Join a community that supports and uplifts each other.</p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="bg-gray-100 py-20">
            <div class="container mx-auto flex flex-col md:flex-row items-center">
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">About Village Bank</h2>
                    <p class="text-gray-600 mb-6">
                        Village Bank is a community-driven platform that empowers individuals through secure savings and
                        easy access to loans. We aim to foster a spirit of cooperation and mutual aid among our members.
                    </p>
                    <a href="#signup" class="px-6 py-3 bg-blue-600 text-white rounded-lg">Learn More</a>
                </div>
                <div class="md:w-1/2">
                    <img src="path/to/about-image.jpg" alt="About Us" class="w-full h-auto rounded-lg shadow-lg">
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="container mx-auto py-20">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">What Our Members Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p class="text-gray-600">"Village Bank has been a lifesaver. I was able to save money and take a
                        loan for my small business."</p>
                    <div class="text-right text-blue-600 font-semibold mt-4">- Jane Doe</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p class="text-gray-600">"The community support is amazing. I've learned so much from other
                        members."</p>
                    <div class="text-right text-blue-600 font-semibold mt-4">- John Smith</div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="signup" class="bg-blue-600 text-center py-20 text-white">
            <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="mb-8">Join our community and start your journey towards financial empowerment today.</p>
            <a href="#signup" class="px-8 py-4 bg-white text-blue-600 rounded-lg">Join Now</a>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto flex justify-between items-center">
                <div>&copy; 2024 Village Bank. All rights reserved.</div>
                <div>
                    <a href="#" class="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Navbar from '@/Components/Navbar.vue';
export default {
    name: "LandingPage",
    components: {Navbar}
    // data() {
    //     return {
    //         isMobileMenuOpen: false,
    //     };
    // },
    // methods: {
    //     toggleMobileMenu() {
    //         this.isMobileMenuOpen = !this.isMobileMenuOpen;
    //     },
    //     closeMobileMenu() {
    //         this.isMobileMenuOpen = false;
    //     },
    // },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>

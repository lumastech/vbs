<template>
    <div>
        <Navbar />

        <!-- Hero Section -->
        <section class="bg-landing">
            <div class="bg-gray-800/50 text-center py-20 text-primary-500">
                <h1 class="text-4xl font-bold mb-4">Empowering Communities with Village Banking</h1>
                <p class="mb-8">Join our community to save, invest, and grow together.</p>
                <a href="/register" class="px-8 py-4 bg-primary-500 hover:bg-primary-700 text-white rounded-lg">Get
                    Started</a>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="container mx-auto py-20">
            <h2 class="text-3xl font-bold text-center text-primary-500 mb-10">Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <img src="../../assets/savings.png" alt="Feature 1" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-primary-500">Secure Savings</h3>
                    <p class="text-gray-600">Keep your money safe with our secure savings accounts.</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/loan_ico.png" alt="Feature 2" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-primary-500">Easy Loans</h3>
                    <p class="text-gray-600">Apply for loans and get approved quickly and easily.</p>
                </div>
                <div class="text-center">
                    <img src="../../assets/comm.png" alt="Feature 3" class="w-16 h-16 mx-auto mb-4">
                    <h3 class="text-xl font-semibold text-primary-500">Community Support</h3>
                    <p class="text-gray-600">Join a community that supports and uplifts each other.</p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="bg-2 ">
            <div class="bg-gray-100/20 backdrop-blur-md py-20 text-primary-100">
                <div class="container mx-auto flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2">
                        <h2 class="text-3xl font-bold text-primary-500 mb-6">About Village Bank</h2>
                        <p class="mb-6">
                            Village Bank is a community-driven platform that empowers individuals through secure savings
                            and
                            easy access to loans. We aim to foster a spirit of cooperation and mutual aid among our
                            members.
                        </p>
                        <a href="#signup" class="px-6 py-3 bg-primary-600 text-white rounded-lg">Learn More</a>
                    </div>
                    <div class="md:w-1/2">
                        <img src="../../assets/image.png" alt="About Us" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="container mx-auto py-20">
            <h2 class="text-3xl font-bold text-center text-primary-500 mb-10">What Our Members Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p class="text-gray-600">"Village Bank has been a lifesaver. I was able to save money and take a
                        loan for my small business."</p>
                    <div class="text-right text-blue-600 font-semibold mt-4">- Natasha Phiri</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p class="text-gray-600">"The community support is amazing. I've learned so much from other
                        members."</p>
                    <div class="text-right text-blue-600 font-semibold mt-4">- Aaron Mapara</div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="signup" class="bg-primary-600 text-center py-20 text-white">
            <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="mb-8">Join our community and start your journey towards financial empowerment today.</p>
            <a href="#signup" class="px-8 py-4 bg-white text-blue-600 rounded-lg">Join Now</a>
        </section>

        <!-- Footer -->
        <footer class="bg-secondary-800 text-white py-6">
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

<script setup>
import Navbar from '@/Components/Navbar.vue';
</script>

<style scoped>
.bg-landing{
    background-image: url('../../assets/landing_bg.jpg');
    background-size: cover;
    background-position: 50%;
}

.bg-2 {
    background-image: url('../../assets/ima2.jpg');
    background-size: cover;
    background-position: 50%;
}
</style>

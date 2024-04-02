<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('contacts', function () {
    return Inertia::render('Contacts');
});

Route::get('products', function () {
    return Inertia::render('Products');
});

Route::get('plan/{plan}', [HomeController::class, 'planshow'])->name('plan.show');
Route::get('plans-list', [HomeController::class, 'plans'])->name('plan.list');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, "index"])->name('dashboard');

    Route::resource('user', UserController::class);
    Route::resource('order', OrderController::class);
    Route::resource('plans', PlanController::class);

    Route::get('/roles', function () {
        return Inertia::render('roles/index');
    })->name('roles');

    Route::get('/roles/create', function () {
        return Inertia::render('roles/create');
    })->name('roles.create');

    Route::get('/roles/{role}/edit', function () {
        return Inertia::render('roles/edit');
    })->name('roles.edit');

    Route::get('/roles/{role}/show', function () {
        return Inertia::render('roles/show');
    })->name('roles.show');

    Route::get('/permissions', function () {
        return Inertia::render('permissions/index');
    })->name('permissions');

    Route::get('/permissions/create', function () {
        return Inertia::render('permissions/create');
    })->name('permissions.create');

    Route::get('/permissions/{permission}/edit', function () {
        return Inertia::render('permissions/edit');
    })->name('permissions.edit');

    Route::get('/permissions/{permission}/show', function () {
        return Inertia::render('permissions/show');
    })->name('permissions.show');
});

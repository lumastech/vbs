<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\SavingController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\LoanPackageController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RoleController;

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

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
});

Route::get('/testing', function () {
    return Inertia::render('Testing');
});


Route::get('loans/create', [LoanController::class, 'create']);
Route::post('loan/store', [LoanController::class, 'store']);

Route::get('settings', [SettingsController::class, 'index']);
Route::post('parckages/store', [LoanPackageController::class, 'store']);
Route::delete('parckages/destroy/{item}', [LoanPackageController::class, 'destroy']);


Route::get('products', function () {
    return Inertia::render('Products');
});

// Route::get('plan/{plan}', [HomeController::class, 'planshow'])->name('plan.show');
// Route::get('plans-list', [HomeController::class, 'plans'])->name('plan.list');
// Route::get('properties/{plan}', [HomeController::class, 'propertyshow'])->name('properties.show');
// Route::get('property-list', [HomeController::class, 'properties'])->name('properties.list');
// Route::post('pay/{id}', [SpackleController::class, 'makePayment']);
// Route::get('invoice-preview/{invoice}', [SpackleController::class, 'invoicePreview'])->name('invoice.preview');
// Route::post('invoice-inv/{invoice}', [SpackleController::class, 'invoiceUpdate'])->name('invoice.inv');
// Route::get('invoice-inv/{ref}', [SpackleController::class, 'invoiceUpdate'])->name('invoice.inv');
// Route::post('invoice-invst', [SpackleController::class, 'invoiceStatus'])->name('invoice.invst');
// Route::get('plan/download/{item}',[PlanController::class, 'DownloadDetails'])->name('plan.download');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('dashboard', [DashboardController::class, "index"])->name('dashboard');

    Route::resource('user', UserController::class);
    Route::resource('loans', LoanController::class);
    Route::get('loans/approve/{item}/{action}', [LoanController::class, 'approve'])->name('loans.approve');
    Route::resource('/savings', SavingController::class);
    Route::get('savings/approve/{item}/{action}', [SavingController::class, 'approve'])->name('savings.approve');
    Route::resource('image', ImageController::class);
    Route::resource('file', FileController::class);
    Route::resource('transactions', TransactionController::class);

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


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Route::get('/dashboard', [DashboardController::class, "index"])->name('dashboard');
});
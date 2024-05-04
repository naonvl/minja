@extends('layouts/layoutMaster')

@section('title', 'Data Master Brand')

@section('vendor-style')
@endsection


@section('vendor-script')
@endsection

@section('page-script')
@endsection

@section('content')
    <h4 class="py-3 mb-4">
        <span class="text-muted fw-light">Data Master /</span> List
    </h4>
    <div class="mb-4 row">
        <ul class="col-md-3 nav nav-pills d-flex flex-column items-start" role="tablist">
            <li class="nav-item">
                <button type="button" class="nav-link active d-flex justify-content-between" role="tab"
                    data-bs-toggle="tab" data-bs-target="#navs-pills-left-home" aria-controls="navs-pills-left-home"
                    aria-selected="true">
                    <span>Brand</span>
                    <i class="ti ti-chevron-right"></i>
                </button>
            </li>
            <li class="nav-item">
                <button type="button" class="nav-link d-flex justify-content-between" role="tab" data-bs-toggle="tab"
                    data-bs-target="#navs-pills-left-profile" aria-controls="navs-pills-left-profile" aria-selected="false">
                    <span>Tipe Produk</span>
                    <i class="ti ti-chevron-right"></i>
                </button>
            </li>
            <li class="nav-item">
                <button type="button" class="nav-link d-flex justify-content-between" role="tab" data-bs-toggle="tab"
                    data-bs-target="#navs-pills-left-messages" aria-controls="navs-pills-left-messages"
                    aria-selected="false"> <span>Tipe Tugas</span>
                    <i class="ti ti-chevron-right"></i>
                </button>
            </li>
        </ul>
        <div class="col-md-9 tab-content">
            <div class="tab-pane fade show active" id="navs-pills-left-home" role="tabpanel">
                <p>
                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder.
                    Bear
                    claw
                    candy topping.
                </p>
                <p class="mb-0">
                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly-o
                    jelly-o ice
                    cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet.
                </p>
            </div>
            <div class="tab-pane fade" id="navs-pills-left-profile" role="tabpanel">
                <p>
                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream.
                    Gummies
                    halvah
                    tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake.
                </p>
                <p class="mb-0">
                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton
                    candy
                    liquorice caramels.
                </p>
            </div>
            <div class="tab-pane fade" id="navs-pills-left-messages" role="tabpanel">
                <p>
                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies cupcake
                    gummi
                    bears
                    cake chocolate.
                </p>
                <p class="mb-0">
                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet roll
                    icing
                    sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly jelly-o tart
                    brownie
                    jelly.
                </p>
            </div>
        </div>
    </div>

@endsection

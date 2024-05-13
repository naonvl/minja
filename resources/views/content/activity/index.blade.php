@extends('layouts/layoutMaster')

@section('title', 'Data Aktifitas')

@section('vendor-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css') }}" />
@endsection

@section('vendor-script')
    <script src="{{ asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/select2/select2.js') }}"></script>
@endsection

@section('page-script')
    <script>
        function initializeSelect2(elementId, url, placeholderText, textProperty, multiple = false) {
            $.ajax({
                url: url,
                dataType: 'json',
                delay: 250,
                success: function(data) {
                    let loadedData = data.length ? data : data.data;
                    var results = $.map(loadedData, function(item) {
                        return {
                            id: item.id,
                            text: item[textProperty]
                        };
                    });
                    results.unshift({
                        id: "null",
                        text: `-- ${placeholderText} --`
                    });

                    $('#' + elementId).wrap('<div class="position-relative"></div>');
                    $('#' + elementId).select2({
                        placeholder: placeholderText,
                        allowClear: true,
                        dropdownParent: $('#' + elementId).parent(),
                        data: results,
                        multiple
                    });
                },
                cache: true
            });
        }
        $(document).ready(function() {
            $('.datatables-products').DataTable({
                processing: true,
                serverSide: true,
                scrollX: true,
                ajax: function(data, callback, settings) {
                    // Mockup data
                    callback({
                        draw: data.draw,
                        recordsTotal: 10,
                        recordsFiltered: 10,
                        data: [{
                                no: 1,
                                nama: 'Anwar',
                                tanggal: '2023-01-01',
                                detail: [{
                                    job: "test",
                                    produk: "test",
                                    brand: "test",
                                    quantity: 10
                                }]
                            },
                            {
                                no: 2,
                                nama: 'Yuda',
                                tanggal: '2023-01-02',
                                detail: [{
                                    job: "test",
                                    produk: "test",
                                    brand: "test",
                                    quantity: 10
                                }]
                            },
                            {
                                no: 3,
                                nama: 'Agung',
                                tanggal: '2023-01-03',
                                detail: [{
                                        job: "test",
                                        produk: "test",
                                        brand: "test",
                                        quantity: 10
                                    },
                                    {
                                        job: "test",
                                        produk: "test",
                                        brand: "test",
                                        quantity: 10
                                    },
                                ]
                            },
                        ]
                    });
                },
                columns: [{
                        data: 'no',
                        name: 'no'
                    },
                    {
                        data: 'nama',
                        name: 'nama'
                    },
                    {
                        data: 'tanggal',
                        name: 'tanggal'
                    },
                    {
                        data: 'detail',
                        name: 'detail',
                        render: function(data, type, row) {
                            let table =
                                `<table class="table" style="width:30%;border:1px solid gray;">
                                    <thead class="bg-primary">
                                      <tr>
                                        <th class="text-white">Brand</th>
                                        <th class="text-white">Job</th>
                                        <th class="text-white">Produk</th>
                                        <th class="text-white">Quantity</th>
                                      </tr>
                                    </thead>
                                  <tbody>`;
                            data.forEach(function(detail) {
                                table +=
                                    `<tr>
                                      <td>${detail.brand}</td>
                                      <td>${detail.job}</td>
                                      <td>${detail.produk}</td>
                                      <td class="text-center">${detail.quantity}</td>
                                    </tr>`;
                            });
                            table += `</tbody></table>`;
                            return table;
                        }
                    },
                    {
                        data: null,
                        defaultContent: '',
                        orderable: false,
                        render: function(data, type, row) {
                            return `
                              <div class="d-flex justify-content-end">
                                <button class="mx-1 btn btn-sm btn-label-success">View</button>
                                <button class="mx-1 btn btn-sm btn-label-primary">Edit</button>
                                <button class="mx-1 btn btn-sm btn-label-danger">Delete</button>
                              </div>
                            `;
                        }
                    }
                ]
            });
        });
    </script>
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item">Data Aktifitas</li>
@endsection


@section('content')
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                    <i class="ti ti-plus me-1"></i>
                    Tambah Jadwal
                </button>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <table class="datatables-products table">
                <thead class="border-top">
                    <tr>
                        <th>No.</th>
                        <th>Nama</th>
                        <th>Tanggal</th>
                        <th>Detail</th>
                        <th style="width: 15%;"></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    {{-- Modal --}}
    <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Aktifitas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Name</label>
                            <input type="text" id="nameBasic" class="form-control" placeholder="Enter Name">
                        </div>
                    </div>
                    <div class="row g-2">
                        <div class="col mb-0">
                            <label for="emailBasic" class="form-label">Email</label>
                            <input type="email" id="emailBasic" class="form-control" placeholder="xxxx@xxx.xx">
                        </div>
                        <div class="col mb-0">
                            <label for="dobBasic" class="form-label">DOB</label>
                            <input type="date" id="dobBasic" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
@endsection

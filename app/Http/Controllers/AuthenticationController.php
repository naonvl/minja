<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
  public function loginIndex()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('content.authentications.auth-login', ['pageConfigs' => $pageConfigs]);
  }
  public function forgotPasswordIndex()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('content.authentications.auth-forgot-password', ['pageConfigs' => $pageConfigs]);
  }
  public function resetPasswordIndex()
  {
    $pageConfigs = ['myLayout' => 'blank'];
    return view('content.authentications.auth-reset-password', ['pageConfigs' => $pageConfigs]);
  }
}

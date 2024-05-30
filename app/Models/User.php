<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens , HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['username', 'email', 'password', 'role_id', 'status'];
    protected $attributes = [
        'user_type' => 1,
    ];
    /**
     * Get the status of the user as a human-readable string.
     *
     * @param int $value The status value (-1, 0, 1)
     * @return string The human-readable status string
     */
    public function getStatusAttribute($value)
    {
        $statuses = [
            0 => 'Inactive',
            1 => 'Active',
        ];

        return $statuses[$value] ?? 'Unknown';
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    /**
     * Accessor for user_type
     *
     * @return string
     */
    public function getUserTypeAttribute()
    {
        return $this->attributes['user_type'] == 0 ? 'admin' : 'client';
    }

    /**
     * Get the employee detail.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function employee()
    {
        return $this->hasOne(Employee::class, 'user_id', 'id');
    }

    /**
     * Disable the user account by setting the status to 0.
     */
    public function disableAccount()
    {
        $this->status = 0;
        $this->save();
    }
}

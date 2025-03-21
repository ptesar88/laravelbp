<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

// STATUS
// FROM_CUSTOMER
// -> FROM_ADMIN
// -> FROM_CUSTOMER_UPDATED

class Demand extends Model
{

    const CREATED_AT = null;
    const UPDATED_AT = null;

    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'status',
        'original_demand_id',
        'customized',
        'firstname',
        'lastname',
        'email',
        'phone',
        'company',
        'localisation',
        'montaz',
        'doprava',
        'totalPrice',
        'updatedPrice',
        'demand_addons_body',
        'demand_addons_id',
        'demand_addons_name',
        'demand_addons_price',
        'demand_addons_unit',
        'demand_addons_array',
        'body', 
               
    ];

      /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    //protected $appends = ['thumbnail_url'];

    /**
     * Get the URL of the thumbnail.
     *
     * @return string|null
     */
    /*
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return asset('attachments/' . $this->thumbnail);
        }
        
        return null;
    }
*/
}

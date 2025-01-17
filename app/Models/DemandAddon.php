<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DemandAddon extends Model
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
        'name',
        'price',
        'unit',
 
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

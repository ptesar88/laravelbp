<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryBed extends Model
{

    const TYPE_KAMEN = 1;
    const TYPE_CIHLA = 2;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'thumbnail',    
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = ['thumbnail_url', 'thumbnail_file'];

    /**
     * Get the URL of the thumbnail.
     *
     * @return string|null
     */
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return asset('attachments/' . $this->thumbnail);
        }
        
        return null;
    }

    /**
     * Get the file of the thumbnail.
     *
     * @return array|null
     */
    public function getThumbnailFileAttribute() {
        if ($this->thumbnail) {
            return [
                "file" => $this->thumbnail,
            ];
        }

        return null;
    }

    public static function getNameById($id) {
        $categoryBed = CategoryBed::find($id);
        return $categoryBed ? $categoryBed->name : "-";
     }

}


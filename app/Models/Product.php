<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'label',
        'width',
        'height',
        'weight',
        'price',
        'depth',
        'type',
        'thumbnail',
        'category',
        'top',
        'category_type',
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

    public function Type()
    {
        return $this->belongsTo(Type::class, 'type', 'id');
    }
    public function getTableNameAttribute()
    {
        return $this->type->name;
    }
    public function Category()
    {
        return $this->belongsTo(Category::class, 'category', 'id');
    }
    public function getCategoryNameAttribute()
    {
        return $this->type->name;
    }
    public function CategoryType()
    {
        return $this->belongsTo(CategoryType::class, 'category_type', 'id');
    }
    public function getCategoryTypeNameAttribute()
    {
        return $this->type->name;
    }

}

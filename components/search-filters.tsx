"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: string[]
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  availableTags: string[]
  placeholder?: string
  className?: string
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  selectedTags,
  onTagsChange,
  availableTags,
  placeholder = "Search...",
  className,
}: SearchFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const clearFilters = () => {
    onSearchChange("")
    onCategoryChange("all")
    onTagsChange([])
  }

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "all" || selectedTags.length > 0

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder={placeholder}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Mobile Filter Button */}
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {hasActiveFilters && <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs">!</Badge>}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <FilterContent
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
                availableTags={availableTags}
                selectedTags={selectedTags}
                onTagsChange={handleTagToggle}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block">
        <FilterContent
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagsChange={handleTagToggle}
        />
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: "{searchQuery}"
              <X className="h-3 w-3 cursor-pointer" onClick={() => onSearchChange("")} />
            </Badge>
          )}
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Category: {selectedCategory}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onCategoryChange("all")} />
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              {tag}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleTagToggle(tag)} />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}

interface FilterContentProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  availableTags: string[]
  selectedTags: string[]
  onTagsChange: (tag: string) => void
}

function FilterContent({
  categories,
  selectedCategory,
  onCategoryChange,
  availableTags,
  selectedTags,
  onTagsChange,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={
                selectedCategory === category ? "bg-amber-600 hover:bg-amber-700" : "bg-transparent hover:bg-muted"
              }
              onClick={() => onCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Tag Filters */}
      {availableTags.length > 0 && (
        <div>
          <h3 className="font-medium mb-3">Tags</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableTags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox id={tag} checked={selectedTags.includes(tag)} onCheckedChange={() => onTagsChange(tag)} />
                <label htmlFor={tag} className="text-sm cursor-pointer">
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

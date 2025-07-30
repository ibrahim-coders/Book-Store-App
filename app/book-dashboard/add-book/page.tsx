import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const page = () => {
  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-600">
          <Plus />
          Add New Book
        </h2>
        <p className="text-sm text-gray-500">
          Add a new book to your library collection
        </p>

        <Card className="my-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Book Title */}
            <label className="flex flex-col">
              Book Title *
              <Input className="mt-2" placeholder="Enter book title" />
            </label>
            {/* Publisher */}
            <label className="flex flex-col">
              Publisher *
              <Input className="mt-2" placeholder="Enter publisher" />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Author */}
            <label className="flex flex-col">
              Author *
              <Input className="mt-2" placeholder="Enter author" />
            </label>
            {/* Published Date */}
            <label className="flex flex-col">
              Published Date *
           <div className="relative my-6">
        <input
          id="id-date01"
          type="date"
          name="id-date01"
          className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <label
          for="id-date01"
          className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Date
        </label>
      </div>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <label className="flex flex-col">
              Category *
              <Input className="mt-2" placeholder="Enter category" />
            </label>
            {/* Pages */}
            <label className="flex flex-col">
              Pages *
              <Input
                className="mt-2"
                placeholder="Enter number of pages"
                type="number"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price */}
            <label className="flex flex-col">
              Price *
              <Input className="mt-2" placeholder="Enter price" type="number" />
            </label>
            {/* Original Price */}
            <label className="flex flex-col">
              Original Price
              <Input
                className="mt-2"
                placeholder="Enter original price"
                type="number"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Upload */}
            <label className="flex flex-col">
              Image Upload
              <Input className="mt-2" type="file" />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Description */}
            <label className="flex flex-col">
              Description *
              <Textarea className="mt-2" placeholder="Enter book description" />
            </label>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
// import { DatePicker } from '@/components/ui/date-picker';
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
              {/* <DatePicker className="mt-2" placeholder="Select a date" /> */}
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

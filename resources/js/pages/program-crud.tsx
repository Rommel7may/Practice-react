import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { route } from "ziggy-js"; // ✅ Named import (Ziggy v1.6+)

type Program = {
  id: number;
  name: string;
};

interface PageProps {
  programs: Program[];
}

export default function ProgramCrud({ programs }: PageProps) {
  const { data, setData, post, put, delete: destroyFn, reset, errors } = useForm({
    name: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // ✅ Create or Update
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      put(route("programs.update", editId), {
        onSuccess: () => {
          reset();
          setEditId(null);
        },
      });
    } else {
      post(route("programs.store"), {
        onSuccess: () => reset(),
      });
    }
  };

  // ✅ Edit mode
  const handleEdit = (program: Program) => {
    setData("name", program.name);
    setEditId(program.id);
  };

  // ✅ Delete
  const handleDelete = (id: number) => {
    destroyFn(route("programs.destroy", id));
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1">
          <Input
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            placeholder="Program name"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </div>
        <Button type="submit">{editId ? "Update" : "Add"}</Button>
      </form>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.length > 0 ? (
            programs.map((program) => (
              <TableRow key={program.id}>
                <TableCell>{program.id}</TableCell>
                <TableCell>{program.name}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit(program)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(program.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500">
                No programs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

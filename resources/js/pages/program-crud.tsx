import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Program managamenent',
        href: 'program',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Program" />
            <div className="m-5 w-2xl p-5">
                <Dialog>
                    <DialogTrigger>
                        <Button>Add student</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add new program</DialogTitle>
                            <DialogDescription>
                                Fill in the details of the new program you want
                                to create.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                            <Input placeholder="e.g. Bs Information Technology" />
                        </div>

                        <DialogFooter>
                            <Button type="submit">Save</Button>
                            <DialogClose>
                                <Button variant="ghost">Cancelljhjh</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="m-5 justify-center p-5">
                <Table>
                    <TableCaption>
                        A list of all available programs.
                    </TableCaption>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Program name</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>BS Information Technology</TableCell>
                            <TableCell className="text-right">

                                {/* edit modal */}
                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant="secondary" className='m-2'>
                                            Edit
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Update program
                                            </DialogTitle>
                                            <DialogDescription>
                                                Update the program
                                            </DialogDescription>
                                        </DialogHeader>

                                        <DialogFooter>
                                            <DialogClose>
                                                <Button variant="ghost">
                                                    Cancel
                                                </Button>
                                            </DialogClose>
                                            <Button variant="outline">
                                                Save
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                {/* delete modal */}
                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant="destructive">
                                            Delete
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Are you sure to delete this
                                                program?
                                            </DialogTitle>
                                            <DialogDescription>
                                                This action will be undone
                                                without confrimation
                                            </DialogDescription>
                                        </DialogHeader>

                                        <DialogFooter>
                                            <DialogClose>
                                                <Button variant="ghost">
                                                    Cancel
                                                </Button>
                                            </DialogClose>
                                            <Button variant="destructive">
                                                Delete
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}

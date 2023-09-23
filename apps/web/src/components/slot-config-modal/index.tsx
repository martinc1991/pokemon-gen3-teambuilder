import { Button, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input, Label } from 'ui';

export default function SlotConfigModal(): JSX.Element {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>name</DialogTitle>
        <DialogDescription>You can customize your pokemon here. No need to save.</DialogDescription>
      </DialogHeader>
      <div className='grid gap-4 py-4'>
        <div className='grid items-center grid-cols-4 gap-4'>
          <Label className='text-right text-white' htmlFor='name'>
            Name
          </Label>
          <Input className='col-span-3 text-white' id='name' />
        </div>
        <div className='grid items-center grid-cols-4 gap-4'>
          <Label className='text-right text-white' htmlFor='username'>
            Username
          </Label>
          <Input className='col-span-3 text-white' id='username' />
        </div>
      </div>
      <DialogFooter>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}

"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUploadField } from "@/components/site/admin/image-upload-field";
import { initialActionState } from "@/lib/action-state";
import { createGalleryPhoto } from "@/lib/admin-actions";
import { GALLERY_CATEGORIES } from "@/components/site/photo-gallery";

function GalleryPhotoForm({ onSuccess }: { onSuccess: () => void }) {
  const [state, formAction, pending] = useActionState(createGalleryPhoto, initialActionState);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
      onSuccess();
    }
  }, [state, onSuccess]);

  return (
    <form action={formAction} className="space-y-4">
      <ImageUploadField name="image_key" label="Photo" />
      <div className="space-y-2">
        <Label htmlFor="gp-category">Initiative category</Label>
        <Select name="category" defaultValue={GALLERY_CATEGORIES[0]}>
          <SelectTrigger id="gp-category" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {GALLERY_CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="gp-alt">Description (optional, for accessibility)</Label>
        <Input id="gp-alt" name="alt_text" placeholder="Volunteers distributing food aid" />
      </div>
      {state.status === "error" && <p className="text-sm text-destructive">{state.message}</p>}
      <DialogFooter>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Add photo"}
        </Button>
      </DialogFooter>
    </form>
  );
}

export function GalleryFormDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add gallery photo</DialogTitle>
        </DialogHeader>
        {open && <GalleryPhotoForm onSuccess={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  );
}

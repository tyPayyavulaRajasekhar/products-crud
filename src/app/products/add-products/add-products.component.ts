import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  form: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      productName: this.fb.control('', [Validators.required]),
      productPrice: this.fb.control('', [Validators.required]),
      productImageURL: this.fb.control('', [Validators.required]),
      productDescription: this.fb.control('', [Validators.required])
    });
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.form.value);
    this.productService.addProduct(this.form.value).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      if (!res.error) {
        this.form.reset();
        this.toastr.success('Success!', 'Product Added Successfully!!');
      }
    })
  }
}

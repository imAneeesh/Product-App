import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'https://productapp-yi5q.onrender.com/api/products'; // Adjust the URL if needed

    constructor(private http: HttpClient) { }

    createProduct(product: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, product);
    }

    getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    deleteProduct(id: any): Observable<any>{
        const newUrl = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(newUrl);
    }
}

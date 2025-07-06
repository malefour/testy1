import { Injectable } from '@nestjs/common';

export interface PaymentRequest {
  amount: number;
  currency: string;
  paymentMethod: string;
  description: string;
  metadata?: Record<string, string>;
}

export interface PaymentResult {
  paymentId: string;
  status: 'succeeded' | 'failed' | 'pending';
  amount: number;
  currency: string;
  transactionId: string;
  error?: string;
}

@Injectable()
export class PaymentService {
  async processPayment(paymentRequest: PaymentRequest): Promise<PaymentResult> {
    // Mock Stripe payment processing
    console.log(`💳 Mock payment processing: $${paymentRequest.amount} ${paymentRequest.currency}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Mock payment success (90% success rate)
    const isSuccess = Math.random() > 0.1;
    
    if (isSuccess) {
      const paymentId = this.generatePaymentId();
      const transactionId = this.generateTransactionId();
      
      console.log(`✅ Mock payment succeeded: ${paymentId}`);
      
      return {
        paymentId,
        status: 'succeeded',
        amount: paymentRequest.amount,
        currency: paymentRequest.currency,
        transactionId,
      };
    } else {
      console.log(`❌ Mock payment failed`);
      
      return {
        paymentId: this.generatePaymentId(),
        status: 'failed',
        amount: paymentRequest.amount,
        currency: paymentRequest.currency,
        transactionId: this.generateTransactionId(),
        error: 'Insufficient funds',
      };
    }
  }

  async refundPayment(paymentId: string, amount?: number): Promise<PaymentResult> {
    // Mock refund processing
    console.log(`🔄 Mock refund processing for payment: ${paymentId}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 150));
    
    console.log(`✅ Mock refund succeeded for payment: ${paymentId}`);
    
    return {
      paymentId: this.generatePaymentId(),
      status: 'succeeded',
      amount: amount || 0,
      currency: 'USD',
      transactionId: this.generateTransactionId(),
    };
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResult | null> {
    // Mock payment status retrieval
    console.log(`🔍 Mock payment status requested for: ${paymentId}`);
    
    // In a real implementation, this would query Stripe
    return {
      paymentId,
      status: 'succeeded',
      amount: 50.00,
      currency: 'USD',
      transactionId: this.generateTransactionId(),
    };
  }

  private generatePaymentId(): string {
    return `pi_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  }

  private generateTransactionId(): string {
    return `txn_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  }
} 
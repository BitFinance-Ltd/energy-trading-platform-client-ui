```jsx
<div style={{ background: '#f0f4f7', padding: '1.5rem' }}>
    <ConfigurationForm onSubmit={formData => console.log(formData)} />
</div>
```

#### ConfigurationForm with errors

```jsx
<div style={{ background: '#f0f4f7', padding: '1.5rem' }}>
    <ConfigurationForm
        onSubmit={formData => console.log(formData)}
        errors={{ blockChain: 'Select blockchain network.', address: 'Select address.' }}
        disabled
    />
</div>
```

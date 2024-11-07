document.getElementById("item").addEventListener("change", function()
{
    if(this.checked)
    {
        document.getElementById("itemForm").style.display="block";
        document.getElementById("supplierForm").style.display="none";
        document.getElementById("formTitle").style.display="Item Details";
    }
}

);

document.getElementById("supplier").addEventListener("change", function()
{
    if(this.checked)
    {
        document.getElementById("itemForm").style.display="none";
        document.getElementById("supplierForm").style.display="block";
        document.getElementById("formTitle").style.display="Supplier Details";
    }
}

);

document.getElementById("item").addEventListener("change", function()
{
    if(this.checked)
    {
        document.getElementById()
    }
});
